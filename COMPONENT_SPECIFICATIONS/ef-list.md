# ef-list

## Description

Render either an `ol` or `ul` HTML element.

Can contain these components:

* ef-list-divider
* ef-list-group-header
* ef-list-header
* ef-list-item


## Influences

* https://html.spec.whatwg.org/multipage/semantics.html#the-ol-element
* https://html.spec.whatwg.org/multipage/semantics.html#the-ul-element
* http://purecss.io/menus/#vertical-menu
* http://foundation.zurb.com/sites/docs/navigation.html#basics-menu
* http://v4-alpha.getbootstrap.com/components/list-group/
* http://getuikit.com/docs/description-list.html
* https://styles.clickfunnels.com/ui-components/sidenav


## Specification

### HTML element

* ol or ul


### HTML Attributes

These are attribute bindings to properties of the same name

* reversed
* start
* type


### CSS Class

* ef-list


### CSS Class Name Bindings

none


### Properties

**ordered** *(Boolean)*

*Default: false*

* A value of `true` will render an `ol` element.
* A value of `false` will render an `ul` element.


### Block/Non Block support

* **Block support:** *Yes*
* **Non-Block support:** *No*


## Example Usage

```
// template

{{#ef-list}}
  {{#ef-list-header}}
    My List of Things
  {{/ef-list-header}}

  {{#ef-list-group-header}}
    Letters
  {{/ef-list-header}}

  {{#ef-list-item}}
    A
  {{/ef-list-item}}

  {{ef-list-divider}}

  {{#ef-list-group-header}}
    Numbers
  {{/ef-list-header}}

  {{#ef-list-item}}
    1
  {{/ef-list-item}}
{{/ef-list}}


// rendered HTML

<ul class="ef-list">
  <li class="ef-list-header">
    My List of Things
  </li>

  <li class="ef-list-group-header">
    Letters
  </li>

  <li class="ef-list-item">
    A
  </li>

  <li class="ef-list-divider"></li>

  <li class="ef-list-group-header">
    Numbers
  </li>

  <li class="ef-list-item">
    1
  </li>
</ul>
```


```
// template

{{#ef-list ordered=true}}
  {{#ef-list-item}}
    A
  {{/ef-list-item}}

  {{#ef-list-item value=6}}
    B
  {{/ef-list-item}}

  {{#ef-list-item}}
    C
  {{/ef-list-item}}
{{/ef-list}}


// rendered HTML

<ol class="ef-list">
  <li class="ef-list-item">A</li>
  <li class="ef-list-item" value="6">B</li>
  <li class="ef-list-item">C</li>
</ol>
```
