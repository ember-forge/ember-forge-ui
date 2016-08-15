# form/ef-datetime-local

## Description

Render an `input` HTML element with `type=datetime-local`



## Influences

* https://html.spec.whatwg.org/#local-date-and-time-state-(type=datetime-local)


## Specification

### HTML element

* input[type=datetime-local]


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

* ef-input-datetime-local


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
  {{f.input-datetime-local}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="datetime-local" class="ef-input-datetime-local">
</form>
```
