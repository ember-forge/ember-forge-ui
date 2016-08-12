# form/ef-month

## Description

Render an `input` HTML element with `type=month`



## Influences

* https://html.spec.whatwg.org/multipage/forms.html#month-state-(type=month)


## Specification

### HTML element

* input[type=month]


### HTML Attributes

* autocomplete
* list
* max
* min
* readonly
* required
* step
* all from ef-html-aria-attributes mixin
* all from ef-html-global-attributes mixin


### CSS Class

* ef-input-month


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
  {{f.input-month}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="month" class="ef-input-month">
</form>
```
