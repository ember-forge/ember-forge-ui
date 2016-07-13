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
            * [package.json](#packagejson)
            * [blueprint](#blueprint)
        * [Extending existing components](#extending-existing-components)
            * [Template changes only](#template-changes-only)
            * [Component logic changes](#component-logic-changes)
                * [attributeBindings, classNames, and classNameBindings](#attributebindings-classnames-and-classnamebindings)
    * [Extend an existing companion addon](#extend-an-existing-companion-addon)
        * [NPM dependencies](#npm-dependencies-1)
        * [Addon configuration](#addon-configuration)
        * [Adding new components](#adding-new-components-1)
        * [Extending existing components](#extending-existing-components-1)
* [Demos](#demos)
  * [Application with only ember-forge-ui installed](#application-with-only-ember-forge-ui-installed)
  * [Application with ember-forge-ui and ember-forge-ui-bootstrap4 installed](#application-with-ember-forge-ui-and-ember-forge-ui-bootstrap4-installed)


# What is ember-forge-ui?

An approach to providing UI Components that separates the logic of the components from the DOM, CSS, and any DOM-related Javascript used to render them, providing a consistent API and behavior for the components regardless of how they are rendered.


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

#### Template changes only

If the only changes you wish to make to an existing component are template changes then you need only define a `.hbs` template file and the changes will be picked up automatically.

#### Component logic changes

##### attributeBindings, classNames, and classNameBindings

There is nothing special that must be done to modify these values and the normal Ember approaches can be used.  Since this might be an area developers may not be as familiar with we have provided several examples below illustrating these approaches.

*Removing already-applied attributeBindings*

* The [Ember.js Guides](https://guides.emberjs.com/v2.5.0/components/customizing-a-components-element/#toc_customizing-attributes) describe how setting the bound attribute property to a `null` value will cause the attribute to be cleared.
* Can also use this code: `this.get( 'attributeBindings' ).removeObject( attributeProperty );`

*Removing already-applied classNames*

* Can use this code: `this.get( 'classNames' ).removeObject( className );`

*Removing already-applied classNameBindings*

* Set the binding value to `false` if the property is a Boolean value
* Redefine the computed property returning the bound value if the property is a computed property
* Can also use this code: `this.get( 'classNameBindings' ).removeObject( classNameBinding );`


## Extend an existing companion addon

There are a few items to keep in mind when extending an existing companion addon, which are listed below.

### NPM dependencies

The same instructions in the ["NPM Dependencies"](#npm-dependencies) section apply here as well.


### Addon configuration

#### package.json

In the *package.json* file set your companion addon to run after whichever existing companion addon you are extending,
such as

```
"ember-addon": {
  "after": "existing-companion-addon-extending"
}
```

#### blueprint

In the *blueprints/<name-of-your-companion-addon>/index.js* file define the `afterInstall()` method such as either of
the following:

```
afterInstall: function() {
  return this.addAddonToProject( 'existing-companion-addon-extending', '1.3.0' );
}
```

```
afterInstall: function() {
  return this.addAddonsToProject([
    { name: 'existing-companion-addon-extending', version: '^1.0.1' },
    { name: 'some-other-addon', version: '^2.1.0' }
  ]);
}
```

The version numbers in these examples are illustrative only.



### Adding new components

The same instructions in the ["Adding New Components"](#adding-new-components) section apply here as well.



### Extending existing components

The same instructions in the ["Extending Existing Components"](#extending-existing-components) section apply here as well.


# Demos

### Application with ember-forge-ui and ember-forge-ui-bootstrap4 installed

* [demo-ember-forge-ui-app-consuming-bootstrap4](https://github.com/ember-forge/demo-ember-forge-ui-app-consuming-bootstrap4)

Demonstrates that the combination of `ember-forge-ui` and a companion addon such as `ember-forge-ui-bootstrap4` allows
for:

* the use of a component defined in `ember-forge-ui` with the content of its rendered template provided by a companion addon
* the extension of a component defined in `ember-forge-ui` by a companion addon


