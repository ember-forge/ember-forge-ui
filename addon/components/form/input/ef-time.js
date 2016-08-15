import Ember from 'ember';
import InputElement from 'ember-forge-ui/mixins/form/input/common';

const {
  Component,
} = Ember;

/**
 * input[type="time"] HTML element
 *
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/form/input/common
 * @see {@link https://html.spec.whatwg.org/#time-state-(type=time)}
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
    'readonly',
    'required',
    'step'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-input-time'
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
   * @type {?String}
   */
  max: null,

  /**
   * Minimum element value
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-input-min}
   * @type {?String}
   */
  min: null,

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
   * Input type: time
   *
   * @type {String}
   */
  type: 'time'

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
