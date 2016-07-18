# ef-list-item

## Description

Render the `li` HTML element for use by these components

 * yet to be determined


## Influences

* https://html.spec.whatwg.org/multipage/semantics.html#the-li-element
* http://v4-alpha.getbootstrap.com/components/list-group/
* http://purecss.io/menus/
* http://foundation.zurb.com/sites/docs/navigation.html#basics-menu
* http://getuikit.com/docs/list.html
* http://materializecss.com/collections.html


## Specification

### HTML element

* li


### HTML Attributes

These are attribute bindings to properties of the same name

* value


### CSS Class

* ef-list-item


### CSS Class Name Bindings

These are CSS class name bindings, listed as **property:** *class name applied*

* **active:** *ef-active*
* **disabled:** *ef-disabled*


### Block/Non Block support

* **Block support:** *Yes*
* **Non-Block support:** *No*


## Example Usage

```
// template

{{#ef-list-item}}
  Item 1
{{/ef-list-item}}

// rendered HTML

<li>Item 1</li>
```

```
// template

{{#ef-list-item}}
  {{#link-to "items" 1}}Item 1{{/link-to}}
{{/ef-list-item}}

// rendered HTML (though with better Ember magic)

<li>
  <a href="">Item 1</a>
</li>
```


```
// template

{{#ef-list-item value="1"}}
  {{#link-to "items" 1}}Item 1{{/link-to}}
{{/ef-list-item}}

// rendered HTML (though with better Ember magic)

<li value="1">
  <a href="">Item 1</a>
</li>
```

```
// template

{{#ef-list-item active=true}}
  {{#link-to "items" 1}}Item 1{{/link-to}}
{{/ef-list-item}}

// rendered HTML (though with better Ember magic)

<li class="ef-active">
  <a href="">Item 1</a>
</li>
```

```
// template

{{#ef-list-item disabled=true}}
  {{#link-to "items" 1}}Item 1{{/link-to}}
{{/ef-list-item}}

// rendered HTML (though with better Ember magic)

<li class="ef-disabled">
  <a href="">Item 1</a>
</li>
```
