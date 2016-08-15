# form/ef-color

## Description

Render an `input` HTML element with `type=color`



## Influences

* https://html.spec.whatwg.org/multipage/forms.html#color-state-(type=color)


## Specification

### HTML element

* input[type=color]


### HTML Attributes

* autocomplete
* list
* all from ef-html-aria-attributes mixin
* all from ef-html-global-attributes mixin


### CSS Class

* ef-input-color


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
  {{f.input-color}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="color" class="ef-input-color">
</form>
```
