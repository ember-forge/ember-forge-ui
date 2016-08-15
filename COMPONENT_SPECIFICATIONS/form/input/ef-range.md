# form/ef-range

## Description

Render an `input` HTML element with `type=range`



## Influences

* https://html.spec.whatwg.org/multipage/forms.html#range-state-(type=range)


## Specification

### HTML element

* input[type=range]


### HTML Attributes

* autocomplete
* list
* max
* min
* step
* all from ef-html-aria-attributes mixin
* all from ef-html-global-attributes mixin


### CSS Class

* ef-input-range


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
  {{f.input-range}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="range" class="ef-input-range">
</form>
```
