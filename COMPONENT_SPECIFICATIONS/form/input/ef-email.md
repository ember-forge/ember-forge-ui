# form/ef-email

## Description

Render an `input` HTML element with `type=email`



## Influences

* https://html.spec.whatwg.org/multipage/forms.html#e-mail-state-(type=email)


## Specification

### HTML element

* input[type=email]


### HTML Attributes

* autocapitalize
* autocomplete
* autocorrect
* list
* maxlength
* minlength
* multiple
* pattern
* placeholder
* readonly
* required
* size
* all from ef-html-aria-attributes mixin
* all from ef-html-global-attributes mixin


### CSS Class

* ef-input-email


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
  {{f.input-email
    property="email"
  }}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="email`" class="ef-input-email`" value="test@example.com">
</form>
```
