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
     * Name of companion ember-forge-ui template addon
     *
     * @type {?String}
     */
    emberForgeUiTemplateAddon: null,

    /**
     * Set name of companion ember-forge-ui template addon to local context if exists
     *
     * @param {String} environment
     * @param {Object} appConfig
     * @returns {undefined}
     */
    config: function( environment, appConfig ) {
        if ( appConfig[this.name].addonName ) {
            this.emberForgeUiTemplateAddon = appConfig[this.name].addonName;
        }
    },

    /**
     * Return templates if ember-forge-ui template addon is installed, default ones if not
     *
     * @param {Object} tree
     * @returns {Object}
     */
    treeForAddonTemplates: function() {
        if ( this.emberForgeUiTemplateAddon ) {
            return this.treeGenerator(
                path.join( this.nodeModulesPath, this.emberForgeUiTemplateAddon, 'addon', 'templates' )
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
    }
};
