# form/ef-fieldset

## Description

Render a `fieldset` HTML element containing any of these components:

* @todo?


## Influences

* https://html.spec.whatwg.org/multipage/forms.html#the-fieldset-element
* http://v4-alpha.getbootstrap.com/components/forms/#form-groups
* http://foundation.zurb.com/sites/docs/forms.html#fieldset-styles
* http://purecss.io/forms/
* http://getuikit.com/docs/form.html


## Specification

### HTML element

* fieldset


### HTML Attributes

* disabled
* form
* name
* all from ef-html-aria-attributes mixin
* all from ef-html-global-attributes mixin


### CSS Class

* ef-fieldset


### CSS Class Name Bindings

* None


## Properties

None


### Block/Non Block support

* **Block support:** *Yes*
* **Non-Block support:** *No*


## Example Usage

```
// template

{{#ef-form as |f|}}
  {{#f.fieldset}}
    {{f.label for="address" label="Label Text"}}
    {{f.input elementId="address"}}
  {{f.fieldset}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <fieldset class="ef-fieldset">
    <label for="address" class="ef-label">Label Text</label>
    <input id="address" class="ef-input">
  </fieldset>
</form>
```
