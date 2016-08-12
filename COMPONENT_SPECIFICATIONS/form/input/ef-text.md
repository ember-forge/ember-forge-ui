# form/ef-text

## Description

Render an `input` HTML element with `type=text`



## Influences

* https://html.spec.whatwg.org/multipage/forms.html#text-(type=text)-state-and-search-state-(type=search)


## Specification

### HTML element

* input[type=text]


### HTML Attributes

* autocomplete
* dirname
* inputmode
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

* ef-input-text


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
  {{f.input-text
    property="age"
  }}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="text" class="ef-input-text" value="38">
</form>
```
