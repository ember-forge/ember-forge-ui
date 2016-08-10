import Ember from 'ember';
import InputElement from 'ember-forge-ui/mixins/form/input';

const {
  Component,
} = Ember;

/**
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/form/input
 */
export default Component.extend(InputElement, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'autocomplete'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-input-hidden'
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
   * Input element type
   *
   * @type {String}
   */
  type: 'hidden'

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
