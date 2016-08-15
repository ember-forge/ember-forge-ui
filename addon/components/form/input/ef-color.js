import Ember from 'ember';
import InputElement from 'ember-forge-ui/mixins/form/input/common';

const {
  Component,
} = Ember;

/**
 * input[type="color"] HTML element
 *
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/form/input/common
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#color-state-(type=color)}
 */
export default Component.extend(InputElement, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'autocomplete',
    'list'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-input-color'
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
   * Input type: color
   *
   * @type {String}
   */
  type: 'color'

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
