import Ember from 'ember';
import InputElement from 'ember-forge-ui/mixins/form/input/common';

const {
  Component,
} = Ember;

/**
 * input[type="search"] HTML element
 *
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/form/input/common
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#text-(type=text)-state-and-search-state-(type=search)}
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
    'autosave',
    'dirname',
    'incremental',
    'inputmode',
    'list',
    'maxlength',
    'minlength',
    'pattern',
    'placeholder',
    'readonly',
    'required',
    'results',
    'size'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-input-search'
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
   * Specifies an autosave name for a search field, so prior searches can be saved.
   *
   * @see {@link https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html}
   * @type {?String}
   */
  autosave: null,

  /**
   * Name of form control to use for sending the element's directionality in form submission
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-dirname}
   * @type {?String}
   */
  dirname: null,

  /**
   * Specifies whether or not the search input type should perform the search as the user is typing.
   *
   * @see {@link https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input}
   * @type {?Boolean}
   */
  incremental: null,

  /**
   * Specifies what kind of input mechanism would be most helpful for users entering content into the form control.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-inputmode}
   * @type {?String}
   */
  inputmode: null,

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
   * Control the maximum number of entries that should be displayed in the native dropdown list of past search queries
   *
   * @see {@link https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html}
   * @type {?Number}
   */
  results: null,

  /**
   * Number of characters that, in a visual rendering, the user agent is to allow the user to see
   * while editing the element's value
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-input-size}
   * @type {?Number}
   */
  size: null,

  /**
   * Input type: search
   *
   * @type {String}
   */
  type: 'search'

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
