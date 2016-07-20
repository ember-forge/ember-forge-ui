# ef-nav

## Description

Render a `nav` HTML element containing an `ef-list` component to represent a section of a page that links to other pages
or to parts within the page.


## Influences

* https://html.spec.whatwg.org/multipage/semantics.html#the-nav-element
* http://caniuse.com/#feat=html5semantic
* Navs
  * http://purecss.io/menus/#vertical-menu
  * http://purecss.io/menus/#horizontal-menu
  * http://purecss.io/menus/#selected-and-disabled-items
  * http://foundation.zurb.com/sites/docs/navigation.html#basics-menu
  * http://v4-alpha.getbootstrap.com/components/navs/
  * https://styles.clickfunnels.com/ui-components/nav
* Nested Navs
  * http://getuikit.com/docs/nav.html
  * http://purecss.io/menus/#vertical-menu-with-submenus
  * http://foundation.zurb.com/sites/docs/navigation.html#basics-menu
* Navbar
  * http://getuikit.com/docs/navbar.html
  * http://materializecss.com/navbar.html
  * http://foundation.zurb.com/sites/docs/navigation.html#top-bar
  * http://v4-alpha.getbootstrap.com/components/navbar/
  * https://styles.clickfunnels.com/ui-components/navbar
* Subnav (styling)
  * http://getuikit.com/docs/subnav.html
  * http://v4-alpha.getbootstrap.com/components/navs/#stacked-pills
* Sidenav
  * https://styles.clickfunnels.com/ui-components/sidenav
  * Others define a sidenav but it is a toggle/slide out UX
* Panel
  * http://getuikit.com/docs/panel.html
  * https://github.com/softlayer/sl-ember-components/issues/1274
* Tabs
  * http://getuikit.com/docs/tab.html
  * http://semantic-ui.com/modules/tab.html
  * http://materializecss.com/tabs.html
  * http://v4-alpha.getbootstrap.com/components/navs/#tabs
  * https://github.com/softlayer/sl-ember-components/issues/1274
* Pills
  * http://getuikit.com/docs/subnav.html
  * http://v4-alpha.getbootstrap.com/components/navs/#pills
  * http://v4-alpha.getbootstrap.com/components/navs/#stacked-pills
* Dropdown
  * http://getuikit.com/docs/dropdown.html
  * http://getuikit.com/docs/nav.html
  * http://foundation.zurb.com/sites/docs/navigation.html#dropdown-menu
  * http://semantic-ui.com/collections/menu.html
  * http://purecss.io/menus/#dropdowns
  * http://semantic-ui.com/modules/dropdown.html
  * http://materializecss.com/dropdown.html#!
  * http://v4-alpha.getbootstrap.com/components/dropdowns/
  * http://v4-alpha.getbootstrap.com/components/navs/#tabs-with-dropdowns
  * http://v4-alpha.getbootstrap.com/components/navs/#pills-with-dropdowns
* Menu
  * http://semantic-ui.com/collections/menu.html
  * http://softlayer.github.io/sl-ember-components/#/demos/sl-menu


## Specification

### HTML element

* nav


### HTML Attributes

* None


### CSS Class

* ef-nav


### CSS Class Name Bindings

These are CSS class name bindings, listed as **property:** *class name applied* (default state)

* **inline:** *ef-inline* (defaults to `inline: false`)
* **inverse:** *ef-inverse* (defaults to `inverse: false`)


## Properties

* None


### Block/Non Block support

* **Block support:** *Yes*
* **Non-Block support:** *No*


## Example Usage

```
// template

{{#ef-nav}}
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
{{/ef-nav}}

// rendered HTML

<nav class="ef-nav">
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
</nav>
```
