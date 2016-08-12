# form/ef-telephone

## Description

Render an `input` HTML element with `type=tel`



## Influences

* https://html.spec.whatwg.org/multipage/forms.html#telephone-state-(type=tel)


## Specification

### HTML element

* input[type=tel]


### HTML Attributes

* autocomplete
* list
* maxlength
* minlength
* pattern
* placeholder
* readonly
* required
* size
* all from ef-html-aria-attributes mixin
* all from ef-html-global-attributes mixin


### CSS Class

* ef-input-telephone


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
  {{f.input-telephone
    property="phone"
  }}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="tel" class="ef-input-telephone" value="555-555-1212">
</form>
```
