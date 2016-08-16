import Ember from 'ember';
import InputElement from 'ember-forge-ui/mixins/form/input/common';

const {
  Component,
} = Ember;

/**
 * input[type="url"] HTML element
 *
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/form/input/common
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#url-state-(type=url)}
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
    'list',
    'maxlength',
    'minlength',
    'pattern',
    'placeholder',
    'readonly',
    'required',
    'size'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-input-url'
  ],

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Controls whether and how the text value for textual form control descendants
   * should be automatically capitalized as it is entered/edited by the user
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form}
   * @see {@link https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html}
   * @type {?String}
   */
  autocapitalize: null,

  /**
   * Specifies whether or not input fields should have autocomplete enabled.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-form-autocomplete}
   * @type {?String}
   */
  autocomplete: null,

  /**
   * Identify an element that lists predefined options suggested to the user
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-input-list}
   * @type {?String}
   */
  list: null,

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
   * Specifies a regular expression against which the control's value are to be checked
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-input-pattern}
   * @type {?String}
   */
  pattern: null,

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
   * Number of characters that, in a visual rendering, the user agent is to allow the user to see
   * while editing the element's value
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-input-size}
   * @type {?Number}
   */
  size: null,

  /**
   * Input type: url
   *
   * @type {String}
   */
  type: 'url'

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
