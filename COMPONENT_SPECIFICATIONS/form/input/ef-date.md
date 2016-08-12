# form/ef-date

## Description

Render an `input` HTML element with `type=date`



## Influences

* https://html.spec.whatwg.org/multipage/forms.html#date-state-(type=date)


## Specification

### HTML element

* input[type=date]


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

* ef-input-date


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
  {{f.input-date
    property="birthday"
  }}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="date" class="ef-input-date">
</form>
```
