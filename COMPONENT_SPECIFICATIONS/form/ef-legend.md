# form/ef-legend

## Description

Render a `legend` HTML element


## Influences

* https://html.spec.whatwg.org/multipage/forms.html#the-legend-element


## Specification

### HTML element

* legend


### HTML Attributes

* all from ef-html-global-attributes mixin


### CSS Class

* ef-legend


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
  {{#f.fieldset}}
    {{f.legend text="Legend Text"}}
  {{/f.fieldset}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <fieldset class="ef-fieldset">
    <legend class="ef-legend">Legend Text</fieldset>
  </fieldset>
</form>
```

```
// template

{{#ef-form as |f|}}
  {{#f.fieldset}}
    {{#f.legend}}
      More text
    {{/f.legend}}
  {{/f.fieldset}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <fieldset class="ef-fieldset">
    <legend class="ef-legend">More Text</fieldset>
  </fieldset>
</form>
```
