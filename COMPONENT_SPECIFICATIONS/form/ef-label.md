# form/ef-label

## Description

Render a `label` HTML element containing any of these components:

* @todo


## Influences

* https://html.spec.whatwg.org/multipage/forms.html#the-label-element
* http://v4-alpha.getbootstrap.com/components/forms/#visible-labels
* http://v4-alpha.getbootstrap.com/components/forms/#hidden-labels
* http://foundation.zurb.com/sites/docs/forms.html#label-positioning
* http://foundation.zurb.com/sites/docs/forms.html#inline-labels-and-buttons


## Specification

### HTML element

* label


### HTML Attributes

* for
* all from ef-html-global-attributes mixin


### CSS Class

* ef-label


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
  {{f.label label="Label Text"}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <label class="ef-label">Label Text</label>
</form>
```

```
// template

{{#ef-form as |f|}}
  {{f.label for="address" label="Label Text"}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <label for="address" class="ef-label">Label Text</label>
</form>
```

```
// template

{{#ef-form as |f|}}
  {{#f.label}}
    Age {{f.input}}
  {{/f.label}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <label class="ef-label">
    Age <input class="ef-input">
  </label>
</form>
```
