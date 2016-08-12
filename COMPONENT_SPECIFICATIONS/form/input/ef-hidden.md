# form/ef-hidden

## Description

Render an `input` HTML element with `type=hidden`



## Influences

* https://html.spec.whatwg.org/multipage/forms.html#hidden-state-(type=hidden)


## Specification

### HTML element

* input[type=hidden]


### HTML Attributes

* autocomplete
* all from ef-html-aria-attributes mixin
* all from ef-html-global-attributes mixin


### CSS Class

* ef-input-hidden


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
  {{f.input-hidden
    property="age"
  }}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="hidden" class="ef-input-hidden" value="38">
</form>
```
