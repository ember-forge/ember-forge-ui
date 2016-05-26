# What is ember-forge-ui?

An approach to providing UI Components that separate the logic of the components from the DOM, CSS, and any DOM-related Javascript use to render them, providing a consistent API and behavior for the components regardless of how they are rendered.


# What is gained by this?

If today your application is leveraging Twitter Bootstrap and tomorrow you need to leverage Materialize instead you do not need to change any of your application's code, but instead install a different companion addon (explained in later sections).


# How is this accomplished?

By the combined installation of two addons:

1. `ember-forge-ui` (this one)
2. a companion addon that provides the templates, CSS and any necessary DOM-related Javascript

The companion addon can provide much more than just templates, CSS and any necessary DOM-related Javascript though.  It can also extend the components provided by `ember-forge-ui` as well as provide its own.


# How is this architected?

@TODO


# So how do I use this then?

## Use an existing companion addon

If you have found a companion addon you wish to use, such as [ember-forge-ui-bootstrap4](https://github.com/ember-forge/ember-forge-ui-bootstrap4), which you do not wish to make any modifications to you simply only need to:

1. `ember install ember-forge-ui`
2. `ember install <companion addon name>`
3. Add this entry to your application's *config/environment.js* file:

```
'ember-forge-ui': {
    addonName: '<companion addon name>'
}
```


## Create your own companion addon

@TODO

move `ember-cli-htmlbars` from `devDependencies` to `dependencies`

### Addon should run before ember-forge-ui addon

@TODO - yet to be determined:

Add this entry to the template addon's *package.json* file:

    "ember-addon": {
        "before": "ember-forge-ui"
    }


## Extend existing companion addon

@TODO

move `ember-cli-htmlbars` from `devDependencies` to `dependencies`

### Addon should run before ember-forge-ui addon and after template addon being extended

@TODO - yet to be determined:

Add this entry to the template addon's *package.json* file:

    "ember-addon": {
        "after": "other-template-addon",
        "before": "ember-forge-ui"
    }



# Demos

### Application with only ember-forge-ui installed

* [demo-ember-forge-ui-app-without-companion-addon](https://github.com/ember-forge/demo-ember-forge-ui-app-without-companion-addon)

Demonstrates an application that only has the `ember-forge-ui` addon installed without any companion addons.  Due to this default template content will be displayed when a component is used indicating that a companion addon needs to be employed as well.


### Application with ember-forge-ui and ember-forge-ui-bootstrap4 installed

* [demo-ember-forge-ui-app-1](https://github.com/ember-forge/demo-ember-forge-ui-app-1)

Demonstrates that the combination of `ember-forge-ui` and a companion addon such as `ember-forge-ui-bootstrap4` allows for the use of a component from `ember-forge-ui` with the content of its rendered template provided by a companion addon, such as `ember-forge-ui-bootstrap4`.


### A companion addon extending ember-forge-ui

* [demo-ember-forge-ui-app-2](https://github.com/ember-forge/demo-ember-forge-ui-app-2)
* [demo-ember-forge-ui-extending-addon-1](https://github.com/ember-forge/demo-ember-forge-ui-extending-addon-1)

Demonstrates that a companion addon can do more than just provide template content to `ember-forge-ui` components but can actually extend their capabilities as well.


### A companion addon can extend another companion addon

* [demo-ember-forge-ui-app-3](https://github.com/ember-forge/demo-ember-forge-ui-app-3)
* [demo-ember-forge-ui-extending-addon-2](https://github.com/ember-forge/demo-ember-forge-ui-extending-addon-2)



### We also need to demonstrate the following combinations

@TODO

* https://github.com/ember-forge/ember-forge-ui/issues/21
* a companion addon is not extending `ember-forge-ui` but is extended and the extending one does
* a companion addon is not extending `ember-forge-ui` and is extended and the extending one does not
* a companion addon is extending `ember-forge-ui` but is extended and the extending one does not
* a companion addon is extending `ember-forge-ui` and is extended and the extending one does


Can likely use different combinations of the existing demo repos above but need to figure that matrix out




