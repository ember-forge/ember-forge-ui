# How to use this addon in your application

## Installation

    ember install ember-forge-ui

# What ember-forge-ui is

Lorem ipsum


# Create template addon

Lorem ipsum

## Addon should run before ember-forge-ui addon

Add this entry to the template addon's *package.json* file:

    "ember-addon": {
        "before": "ember-forge-ui"
    }

## Define config() hook

Lorem ipsum

Add this entry to the template addon's *index.js* file:

    /**
     * Set name of companion ember-forge-ui template addon
     *
     * @param {String} environment
     * @param {Object} appConfig
     * @returns {Object}
     */
    config: function( environment, appConfig ) {
        return {
            emberForgeUiTemplateAddon: this.name
        };
    }

# Extend existing template addon

Lorem ipsum

## Addon should run before ember-forge-ui addon and after template addon being extended

Add this entry to the template addon's *package.json* file:

    "ember-addon": {
        "after": "other-template-addon",
        "before": "ember-forge-ui"
    }
