# form/ef-url

## Description

Render an `input` HTML element with `type=url`



## Influences

* https://html.spec.whatwg.org/multipage/forms.html#url-state-(type=url)


## Specification

### HTML element

* input[type=url]


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

* ef-input-url


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
  {{f.input-url
    property="age"
  }}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="url" class="ef-input-url" value="38">
</form>
```
