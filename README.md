# Table of Contents

* [What is ember-forge-ui?](#what-is-ember-forge-ui)
* [What is gained by this?](#what-is-gained-by-this)
* [How is this accomplished?](#how-is-this-accomplished)
* [How is this architected?](#how-is-this-architected)
* [So how do I use this then?](#so-how-do-i-use-this-then)
    * [Use an existing companion addon](#use-an-existing-companion-addon)
    * [Create your own companion addon](#create-your-own-companion-addon)
        * [NPM dependencies](#npm-dependencies)
        * [Adding new components](#adding-new-components)
        * [Extending existing components](#extending-existing-components)
            * [reopen instead of extend](#reopen-instead-of-extend)
            * [attributeBindings, classNames, and classNameBindings](#attributebindings-classnames-and-classnamebindings)


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

There are a few items to keep in mind when creating your own companion addon, which are listed below.

### NPM dependencies

* Move `ember-cli-htmlbars` dependency from `devDependencies` to `dependencies` in *package.json*

### Adding new components

When adding a new component that does not exist in the `ember-forge-ui` addon (this one) create a component in the usual Ember manner.  For example:

```
// addon/components/ef-new-component.js

export default Ember.Component.extend({
});
```

You are **STRONGLY** encouraged to create new components within the `ef-` namespace to provide consistency when using the `ember-forge-ui` ecosystem. See the ["How is this architected?"](#how-is-this-architected) section for more details.


### Extending existing components

#### reopen instead of extend

When extending a component that exists in the `ember-forge-ui` addon (this one) you need to reopen the component you wish to extend, rather than calling `OriginalComponent.extend()`.  For example:

```
// addon/components/ef-button.js

import Button from 'ember-forge-ui/components/ef-button';

Button.reopen({
});
```

You can still use Mixins with `reopen()` just like can with `extend()`.

For this to work there are also initializers that must be created but this is done automagically for you by the `ember-forge-ui` addon (this one) and more information about that, and why `reopen()` must be used rather than `extend()`, can be found in the ["How is this architected?"](#how-is-this-architected) section.


#### attributeBindings, classNames, and classNameBindings

There is nothing special that must be done to modify these values and the normal Ember approaches can be used.  Since this might be an area developers may not be as familiar with we have provided several examples below illustrating these approaches.

**Removing already-applied attributeBindings**

* The [Ember.js Guides](https://guides.emberjs.com/v2.5.0/components/customizing-a-components-element/#toc_customizing-attributes) describe how setting the bound attribute property to a `null` value will cause the attribute to be cleared.
* Can also use this code: `this.get( 'attributeBindings' ).removeObject( attributeProperty );`

**Removing already-applied classNames**

* Can use this code: `this.get( 'classNames' ).removeObject( className );`

**Removing already-applied classNameBindings**

* Set the binding value to `false` if the property is a Boolean value
* Redefine the computed property returning the bound value if the property is a computed property
* Can also use this code: `this.get( 'classNameBindings' ).removeObject( classNameBinding );`


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




