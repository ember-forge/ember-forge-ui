import Ember from 'ember';
import InputElement from 'ember-forge-ui/mixins/form/input/common';

const {
  Component,
} = Ember;

/**
 * input[type="range"] HTML element
 *
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/form/input/common
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#range-state-(type=range)}
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
    'step'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-input-range'
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
   * @type {?Number|String}
   */
  max: null,

  /**
   * Minimum element value
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-input-min}
   * @type {?Number|String}
   */
  min: null,

  /**
   * Indicates the granularity that is expected (and required) of the value or values,
   * by limiting the allowed values
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-input-step}
   * @type {?Number|String}
   */
  step: null,

  /**
   * Input type: range
   *
   * @type {String}
   */
  type: 'range'

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
