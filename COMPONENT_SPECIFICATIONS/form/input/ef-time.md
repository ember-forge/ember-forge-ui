# form/ef-time

## Description

Render an `input` HTML element with `type=time`



## Influences

* https://html.spec.whatwg.org/#time-state-(type=time)


## Specification

### HTML element

* input[type=time]


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

* ef-input-time


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
  {{f.input-time}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="time" class="ef-input-time">
</form>
```
