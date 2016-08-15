# form/ef-number

## Description

Render an `input` HTML element with `type=number`



## Influences

* https://html.spec.whatwg.org/#number-state-(type=number)


## Specification

### HTML element

* input[type=number]


### HTML Attributes

* autocomplete
* list
* max
* min
* placeholder
* readonly
* required
* step
* all from ef-html-aria-attributes mixin
* all from ef-html-global-attributes mixin


### CSS Class

* ef-input-number


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
  {{f.input-number}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="number" class="ef-input-number">
</form>
```
