# form/ef-checkbox

## Description

Render an `input` HTML element with `type=checkbox`



## Influences

* https://html.spec.whatwg.org/multipage/forms.html#checkbox-state-(type=checkbox)


## Specification

### HTML element

* input[type=checkbox]


### HTML Attributes

* checked
* indeterminate
* required
* all from ef-html-aria-attributes mixin
* all from ef-html-global-attributes mixin


### CSS Class

* ef-input-checkbox


### CSS Class Name Bindings

* None


## Properties

* none



### Block/Non Block support

* **Block support:** *No*
* **Non-Block support:** *Yes*


## Example Usage

```
// template

{{#ef-form data=model as |f|}}
  {{f.input-checkbox}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="checkbox" class="ef-input-checkbox">
</form>
```
