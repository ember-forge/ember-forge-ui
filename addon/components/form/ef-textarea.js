import Ember from 'ember';
import InputElement from 'ember-forge-ui/mixins/form/input/common';

const {
  Component
} = Ember;

/**
 * textarea HTML element
 *
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/form/input/common
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#the-textarea-element}
 */
export default Component.extend(InputElement, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'autocapitalize',
    'autocomplete',
    'autofocus',
    'cols',
    'dirname',
    'disabled',
    'form',
    'inputmode',
    'maxlength',
    'minlength',
    'name',
    'placeholder',
    'readonly',
    'required',
    'rows',
    'wrap'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-textarea'
  ],

  /** @type {String} */
  tagName: 'textarea',

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Specifies the auto-capitalization behavior of text elements
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea}
   * @see {@link https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html}
   * @type {?String}
   */
  autocapitalize: null,

  /**
   * Hint to the user agent how to, or indeed whether to, provide features for helping users fill forms in
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-autocomplete}
   * @type {?String}
   */
  autocomplete: null,

  /**
   * Automatically focus the form control when the page is loaded
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-autofocus}
   * @type {?Boolean}
   */
  autofocus: null,

  /**
   * Maximum number of characters per line
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-textarea-cols}
   * @type {?Number}
   */
  cols: null,

  /**
   * Name of form control to use for sending the element's directionality in form submission
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-dirname}
   * @type {?String}
   */
  dirname: null,

  /**
   * Whether the form control is disabled
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-disabled}
   * @type {?Boolean}
   */
  disabled: null,

  /**
   * Associates the control with a form element
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fae-form}
   * @type {?String}
   */
  form: null,

  /**
   * Specifies what kind of input mechanism would be most helpful for users entering content into the form control.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-inputmode}
   * @type {?String}
   */
  inputmode: null,

  /**
   * Maximum length of value
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-textarea-maxlength}
   * @type {?Number}
   */
  maxlength: null,

  /**
   * Minimum length of value
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-textarea-minlength}
   * @type {?Number}
   */
  minlength: null,

  /**
   * Name of form control to use for form submission and in the form.elements API
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-name}
   * @type {?String}
   */
  name: null,

  /**
   * User-visible label to be placed within the form control
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-textarea-placeholder}
   * @type {?String}
   */
  placeholder: null,

  /**
   * Whether to allow the value to be edited by the user
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-textarea-readonly}
   * @type {?Boolean}
   */
  readonly: null,

  /**
   * Whether the control is required for form submission
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-textarea-required}
   * @type {?Boolean}
   */
  required: null,

  /**
   * Number of lines to show
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-textarea-rows}
   * @type {?Number}
   */
  rows: null,

  /**
   * How the value of the form control is to be wrapped for form submission
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-textarea-wrap}
   * @type {?String}
   */
  wrap: null

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
