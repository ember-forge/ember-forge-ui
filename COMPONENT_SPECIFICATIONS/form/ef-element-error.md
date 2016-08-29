# form/ef-form-error

## Description

Display error message for associated properties.



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

* ef-form-element-error


### CSS Class Name Bindings

These are CSS class name bindings, listed as **property:** *class name applied* (default state)

* **hasMessage:** *ef-hasContent* (defaults to `hasMessage: false`)


## Properties

**pattern** *String*

* Regular expression pattern to apply to error message. Should not contain delimeters around the pattern.


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
  {{f.input-text property="firstName"}}
  {{f.error property="firstName"}}

  {{f.input-text property="lastName"}}
  {{f.error property="lastName" pattern="^T"}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="text" class="ef-input-text" value="">
  <div class="ef-form-element-error">
   First Name cannot be empty.
  </div>

  <input type="text" class="ef-input-text" value="Tomster">
  <div class="ef-form-element-error">
   ...
  </div>
</form>
```

```
// template

{{#ef-form
  data=theData
  errors=theErrors
  as |f|
}}
  {{f.input-text property="firstName"}}
  {{#f.error property="firstName"}}
    Please provide your name
  {{/f.error}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <input type="text" class="ef-input-text" value="">
  <div class="ef-form-element-error">
   Please provide your name
  </div>
</form>
```


```
// template

{{#ef-form
  data=theData
  errors=theErrors
  as |f|
}}
  {{f.input-text property="firstName"}}
  {{#f.error property="firstName" as |message|}}
    Error: {{message}}
  {{/f.error}}
{{/ef-form}}

// rendered HTML

<form class="ef-form">
  <div class="ef-form-element-error">
   Error: First Name cannot be empty.
  </div>
</form>
```

