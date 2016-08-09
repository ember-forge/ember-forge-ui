# form/ef-legend

## Description

Render a `button` HTML element


## Influences

* https://html.spec.whatwg.org/multipage/forms.html#the-button-element
* http://v4-alpha.getbootstrap.com/components/buttons/
* http://foundation.zurb.com/sites/docs/button.html
* http://purecss.io/buttons/
* http://purecss.io/forms/
* http://semantic-ui.com/elements/button.html
* http://semantic-ui.com/collections/form.html
* http://getuikit.com/docs/button.html


## Specification

### HTML element

* button


### HTML Attributes

* autofocus
* disabled
* form
* menu
* name
* type (defaults to "button")
* value
* all from ef-html-aria-attributes mixin
* all from ef-html-global-attributes mixin


### CSS Class

* ef-button (default; if `type` === `button`)
* ef-button-submit (if `type` === `submit`)
* ef-button-reset (if `type` === `reset`)
* ef-button-menu (if `type` === `menu`)


### CSS Class Name Bindings

These are CSS class name bindings, listed as **property:** *class name applied* (default state)

* **disabled:** *ef-disabled* (defaults to `disabled: false`)
* **pending:** *ef-pending* (defaults to `pending: false`)


## Properties

**pending** *Boolean*

* Whether to display the `pendingText` when used in non-block form


**pendingText** *String*

* Text to display when used in non-block form and `pending` is true


**text** *String*

* Text to display when used in non-block form



### Block/Non Block support

* **Block support:** *Yes*
* **Non-Block support:** *Yes*


## Example Usage

```
// template

{{#ef-button}}
  Go
{{/ef-form}}

// rendered HTML

<button type="button" class="ef-button">Go</button>
```

```
// template

{{ef-button text="Go"}}

// rendered HTML

<button type="button" class="ef-button">Go</button>
```

```
// template

{{#ef-form as |f|}}
  {{ef-button text="Go"}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <button type="button" class="ef-button">Go</button>
</form>
```

```
// template

{{#ef-form as |f|}}
  {{f.submit text="Go"}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <button type="submit" class="ef-button-submit">Go</button>
</form>
```
