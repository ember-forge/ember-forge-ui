# ef-form

## Description

Render a `form` HTML element containing any of these components:

* ...


## Influences

* https://html.spec.whatwg.org/multipage/forms.html#forms
* https://html.spec.whatwg.org/multipage/forms.html#the-form-element
* https://html.spec.whatwg.org/multipage/forms.html#attr-form-autocomplete
* http://www.w3.org/TR/html401/struct/global.html#h-7.5.2
* https://html.spec.whatwg.org/multipage/forms.html#attr-fs-novalidate
* https://html.spec.whatwg.org/multipage/dom.html#attr-translate
* https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
* https://github.com/martndemus/ember-form-for
* https://github.com/Emerson/ember-form-master-2000
* https://github.com/infinum/ember-form-object#features
* https://github.com/nibynic/ember-form-builder
* https://github.com/indexiatech/ember-forms
* https://github.com/DockYard/ember-easy-form
* https://github.com/dollarshaveclub/ember-uni-form
* https://github.com/jbandura/ember-legit-forms
* http://v4-alpha.getbootstrap.com/components/forms/
* http://foundation.zurb.com/sites/docs/forms.html
* http://materializecss.com/forms.html
* http://purecss.io/forms/
* http://semantic-ui.com/collections/form.html
* http://getuikit.com/docs/form.html



## Specification

### HTML element

* form


### HTML Attributes

* autocomplete
* novalidate
* all from ef-html-global-attributes mixin



### CSS Class

* ef-form


### CSS Class Name Bindings

* None


## Properties

**action** *(Function)*



**data** *(Object)*

* The object which holds the properties the form fields should edit



**isEditing** *(Boolean)*

*Default: false*

* This value is propogated to all of the contextual components



### Block/Non Block support

* **Block support:** *Yes*
* **Non-Block support:** *No*


## Example Usage

```
// template

{{#ef-form
  action=(action "theSubmitAction")
  data=model
  as |f|
}}
  ...
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  ...
</form>
```
