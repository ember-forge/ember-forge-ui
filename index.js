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
     * @override
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
     * Create default templates for components, override with those defined in ember-forge-ui companion addon
     *
     * @override
     * @param {Object} tree
     * @returns {Object}
     */
    treeForAddonTemplates: function( tree ) {
        var addonPath = path.join( this.nodeModulesPath, this.name, 'addon' );
        var componentTemplateTrees = [];
        var files = fs.readdirSync( path.join( addonPath, 'components' ) );
        var placeholderContentPath = path.join(
            addonPath,
            'templates',
            'components',
            'placeholder-content.hbs'
        );
        var placeholderContent = require( placeholderContentPath );
        placeholderContent = placeholderContent();

        files.forEach( function( element ) {
            componentTemplateTrees.push(
                writeFile( '/components/' + element.replace( '.js', '' ) + '.hbs', placeholderContent )
            );
        });

        var treesToMerge = [
            tree,
            mergeTrees( componentTemplateTrees )
        ];

        if ( this.emberForgeUiCompanionAddonName ) {
            treesToMerge.push(
                this.treeGenerator(
                    path.join( this.nodeModulesPath, this.emberForgeUiCompanionAddonName, 'addon', 'templates' )
                )
            );
        }

        return mergeTrees( treesToMerge, { overwrite: true } );
    }
};
