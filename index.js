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
            var files = fs.readdirSync( path.join( this.nodeModulesPath, '../', 'addon', 'components' ) );
            var placeholderContentPath = path.join(
                this.nodeModulesPath,
                '../',
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
