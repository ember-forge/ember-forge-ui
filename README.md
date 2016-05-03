# What is ember-forge-ui?

*ember-forge-ui* is an approach to providing UI Components that separate the logic of the components from the DOM, CSS, and any CSS framework-specific Javascript use to render them, providing a consistent API and behavior for the components regardless of how they are rendered.

So if today your application is leveraging Twitter Bootstrap and tomorrow you need to leverage Materialize instead you do not need to change any of your application's code, but instead install a different companion addon (explained in the next section).

# How is this accomplished?

The culmination of `ember-forge-ui`s features are achieved 



# How to use this addon in your application

## Installation

    ember install ember-forge-ui





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
