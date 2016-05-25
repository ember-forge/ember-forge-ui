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
        var emberForgeUiCompanionAddonName = this.emberForgeUiCompanionAddonName;
        var files = fs.readdirSync(
            path.join( this.nodeModulesPath, emberForgeUiCompanionAddonName, 'addon', 'components' )
        );
        var initializerTrees = [];
        var template = fs.readFileSync( blueprintPath, 'utf8' );

        files.forEach( function( element ) {
            var content = template;
            content = content.replace( new RegExp( '<%= componentName %>', 'g' ), element.substring( 0, element.length - 3 ) );
            content = content.replace( new RegExp( '<%= addonName %>', 'g' ), emberForgeUiCompanionAddonName );

            initializerTrees.push(
                writeFile( 'modules/' + emberForgeUiCompanionAddonName + '/initializers/' + emberForgeUiCompanionAddonName + '-' + element, content )
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
        var emberForgeUiCompanionAddonName = this.emberForgeUiCompanionAddonName;
        var files = fs.readdirSync(
            path.join( this.nodeModulesPath, emberForgeUiCompanionAddonName, 'addon', 'components' )
        );
        var initializerTrees = [];

        files.forEach( function( element ) {
            var content = "export { default, initialize } from '";
            content += emberForgeUiCompanionAddonName + '/initializers/' + emberForgeUiCompanionAddonName;
            content += '-' + element.substring( 0, element.length - 3 ) + "';";

            initializerTrees.push(
                writeFile( 'initializers/' + emberForgeUiCompanionAddonName + '-' + element, content )
            );
        });

        return mergeTrees(
            tree ? initializerTrees.concat( tree ) : initializerTrees
        );
    }
};
