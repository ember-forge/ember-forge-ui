# form/ef-search

## Description

Render an `input` HTML element with `type=search`



## Influences

* https://html.spec.whatwg.org/multipage/forms.html#text-(type=text)-state-and-search-state-(type=search)


## Specification

### HTML element

* input[type=search]


### HTML Attributes

* autocapitalize
* autocomplete
* autosave
* dirname
* incremental
* inputmode
* list
* maxlength
* minlength
* pattern
* placeholder
* readonly
* required
* results
* size
* all from ef-html-aria-attributes mixin
* all from ef-html-global-attributes mixin


### CSS Class

* ef-input-search


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
  {{f.input-search
    property="age"
  }}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="search" class="ef-input-search" value="38">
</form>
```
