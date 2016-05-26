/* jshint node: true */
'use strict';

var fs = require( 'fs' );
var mergeTrees = require( 'broccoli-merge-trees' );
var path = require( 'path' );
var writeFile = require( 'broccoli-file-creator' );

module.exports = {

    /**
     * Name of addon
     *
     * @type {String}
     */
    name: 'ember-forge-ui',

    /**
     * Cached list of component names in companion addon
     *
     * @type {?Array}
     */
    companionAddonComponents: null,

    /**
     * Name of companion ember-forge-ui addon
     *
     * @type {?String}
     */
    emberForgeUiCompanionAddonName: null,

    /**
     * Set name of ember-forge-ui companion addon to local context if exists
     *
     * @param {String} environment
     * @param {Object} appConfig
     * @returns {undefined}
     */
    config: function( environment, appConfig ) {
        if ( appConfig[this.name] && appConfig[this.name].addonName ) {
            this.emberForgeUiCompanionAddonName = appConfig[this.name].addonName;
        }
    },

    /**
     * Get list of component file names from companion addon `addon/components` directory
     *
     * @returns {Array}
     */
    getCompanionAddonComponents: function() {
        if ( !this.companionAddonComponents ) {
            this.companionAddonComponents = fs.readdirSync(
                path.join( this.nodeModulesPath, this.emberForgeUiCompanionAddonName, 'addon', 'components' )
            );
        }

        return this.companionAddonComponents;
    },

    /**
     * Remove the file extension off of file name
     *
     * Provided that there is single extension, indicated by a period
     *
     * @param {String} file
     * @returns {String}
     */
    removeFileExtension: function( file ) {
        return file.substring( 0, file.length - 3 );
    },

    /**
     * Return templates if ember-forge-ui companion addon is installed, default ones if not
     *
     * @param {Object} tree
     * @returns {Object}
     */
    treeForAddonTemplates: function() {
        if ( this.emberForgeUiCompanionAddonName ) {
            return this.treeGenerator(
                path.join( this.nodeModulesPath, this.emberForgeUiCompanionAddonName, 'addon', 'templates' )
            );

        } else {
            var componentTemplateTrees = [];
            var files = fs.readdirSync( path.join( this.nodeModulesPath, this.name, 'addon', 'components' ) );
            var placeholderContentPath = path.join(
                this.nodeModulesPath,
                this.name,
                'addon',
                'templates',
                'components'
            ) + path.sep + 'placeholder-content.hbs';
            var placeholderContent = require( placeholderContentPath );

            files.forEach( function( element ) {
                componentTemplateTrees.push(
                    writeFile( '/components/' + element.replace( '.js', '' ) + '.hbs', placeholderContent() )
                );
            });

            return mergeTrees( componentTemplateTrees );
        }
    },

    /**
     * Add initializer exports to the addon tree for each component that has been redefined by the companion addon
     *
     * @param {Object} tree
     * @returns {Object}
     */
    treeForAddon: function( tree ) {
        var addonTree = this._super.treeForAddon.apply( this, arguments );
        var blueprintPath = path.join(
            this.nodeModulesPath,
            this.name,
            'blueprints',
            'addon',
            'initializers',
            '__name__.js'
        );
        var blueprint = fs.readFileSync( blueprintPath, 'utf8' );
        var companionAddonName = this.emberForgeUiCompanionAddonName;
        var initializerTrees = [];
        var removeFileExtension = this.removeFileExtension;

        this.getCompanionAddonComponents().forEach( function( element ) {
            var content = blueprint;
            content = content.replace( new RegExp( '<%= componentName %>', 'g' ), removeFileExtension( element ) );
            content = content.replace( new RegExp( '<%= addonName %>', 'g' ), companionAddonName );

            initializerTrees.push(
                writeFile(
                    'modules/' + companionAddonName + '/initializers/' + companionAddonName + '-' + element, content
                )
            );
        });

        return mergeTrees([
            addonTree,
            mergeTrees( initializerTrees )
        ]);
    },

    /**
     * Add initializer exports to the app tree for each component that has been redefined by the companion addon
     *
     * @param {Object} tree
     * @returns {Object}
     */
    treeForApp: function( tree ) {
        var blueprintPath = path.join(
            this.nodeModulesPath,
            this.name,
            'blueprints',
            'app',
            'initializers',
            '__name__.js'
        );
        var blueprint = fs.readFileSync( blueprintPath, 'utf8' );
        var companionAddonName = this.emberForgeUiCompanionAddonName;
        var initializerTrees = [];
        var removeFileExtension = this.removeFileExtension;

        this.getCompanionAddonComponents().forEach( function( element ) {
            var content = blueprint;
            content = content.replace( new RegExp( '<%= componentName %>', 'g' ), removeFileExtension( element ) );
            content = content.replace( new RegExp( '<%= addonName %>', 'g' ), companionAddonName );

            initializerTrees.push(
                writeFile( 'initializers/' + companionAddonName + '-' + element, content )
            );
        });

        return mergeTrees(
            tree ? initializerTrees.concat( tree ) : initializerTrees
        );
    }
};
