# form/ef-password

## Description

Render an `input` HTML element with `type=password`



## Influences

* https://html.spec.whatwg.org/multipage/forms.html#password-state-(type=password)


## Specification

### HTML element

* input[type=password]


### HTML Attributes

* autocomplete
* inputmode
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

* ef-input-password


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
  {{f.input-password
    property="password"
  }}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="password" class="ef-input-password" value="">
</form>
```
