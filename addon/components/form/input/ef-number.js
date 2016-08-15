import Ember from 'ember';
import InputElement from 'ember-forge-ui/mixins/form/input/common';

const {
  Component,
} = Ember;

/**
 * input[type="number"] HTML element
 *
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/form/input/common
 * @see {@link https://html.spec.whatwg.org/#number-state-(type=number)}
 */
export default Component.extend(InputElement, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'autocomplete',
    'list',
    'max',
    'min',
    'placeholder',
    'readonly',
    'required',
    'step'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-input-number'
  ],

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

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
   * Maximum element value
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-input-max}
   * @type {?Number}
   */
  max: null,

  /**
   * Minimum element value
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-input-min}
   * @type {?Number}
   */
  min: null,

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
   * Indicates the granularity that is expected (and required) of the value or values,
   * by limiting the allowed values
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-input-step}
   * @type {?Number|String}
   */
  step: null,

  /**
   * Input type: number
   *
   * @type {String}
   */
  type: 'number'

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
