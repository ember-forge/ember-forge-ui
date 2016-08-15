# form/ef-week

## Description

Render an `input` HTML element with `type=week`



## Influences

* https://html.spec.whatwg.org/#week-state-(type=week)


## Specification

### HTML element

* input[type=week]


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

* ef-input-week


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
  {{f.input-week}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="week" class="ef-input-week">
</form>
```
