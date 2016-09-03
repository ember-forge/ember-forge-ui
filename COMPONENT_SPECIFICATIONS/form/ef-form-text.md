# form/ef-form-text

## Description

Render a `p` HTML element used to display informational text about a form element


## Influences

* http://v4-alpha.getbootstrap.com/components/forms/#help-text


## Specification

### HTML element

* p


### HTML Attributes

* all from ef-html-aria-attributes mixin
* all from ef-html-global-attributes mixin


### CSS Class

* ef-form-text


### CSS Class Name Bindings

* None


## Properties

**text** *String*

* Text to display when used in non-block form



### Block/Non Block support

* **Block support:** *Yes*
* **Non-Block support:** *Yes*


## Example Usage

```
// template

{{#ef-form as |f|}}
  {{f.text text="sample text"}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <p class="ef-form-text">sample text</label>
</form>
```

```
// template

{{#ef-form as |f|}}
  {{#f.form-text}}
    sample text
  {{/f.form-text}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <p class="ef-form-text">sample text</label>
</form>
```
