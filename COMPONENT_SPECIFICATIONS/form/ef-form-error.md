# form/ef-form-error

## Description

Display error messages for properties that are not being managed by individual `form/ef-element-error` instances, including the ability to be a "catch" all error output for errors which weren't anticipated (on a field-by-field, as well as form-wide basis).



## Influences

* http://parsleyjs.org/doc/examples.html
* https://hyperform.js.org
  * Complete implementation of the HTML 5 form validation API in Javascript
* https://github.com/davewasmer/ember-cli-formtastic/blob/master/addon/components/input-for.js
* https://github.com/davewasmer/ember-cli-formtastic/blob/master/addon/components/error-for.js
* https://github.com/nibynic/ember-form-builder
* https://github.com/martndemus/ember-form-for/blob/25309b3f248133f4b2e454618dbdf640d1aa8bbd/addon/components/form-field.js#L106


## Specification

### HTML element

* div


### HTML Attributes

* None


### CSS Class

* ef-form-error


### CSS Class Name Bindings

These are CSS class name bindings, listed as **property:** *class name applied* (default state)

* **hasMessages:** *ef-hasContent* (defaults to `hasMessages: false`)


## Properties

* None



### Block/Non Block support

* **Block support:** *Yes*
* **Non-Block support:** *Yes*


## Example Usage

```
// template

{{#ef-form
  data=theData
  errors=theErrors
  as |f|
}}
  {{f.form-error}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <div class="ef-form-error ef-form-error-hasMessages">
    <ul class="ef-list">
      <li class="ef-list-item">
        ...
      </li>
      <li class="ef-list-item">
        ...
      </li>
    </ul>
  </div>
</form>

<form class="ef-form">
  <div class="ef-form-error"></div>
</form>
```

```
// template

{{#ef-form
  data=theData
  errors=theErrors
  as |f|
}}
  {{#f.form-error as |messages|}}
    {{#each messages as |message|}}
      <p>{{message}}</p>
    {{/each}}
  {{/f.form-error}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <div class="ef-form-error ef-form-error-hasMessages">
    <p>...</p>
    <p>...</p>
  </div>
</form>
```

