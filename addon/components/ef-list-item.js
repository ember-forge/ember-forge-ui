import Ember from 'ember';

const {
  Component
} = Ember;

/**
 * @module
 * @augments ember/Component
 */
export default Component.extend({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'value'
  ],

  /** @type {String[]} */
  classNameBindings: [
    'active:ef-active',
    'disabled:ef-disabled'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-list-item'
  ],

  /** @type {String} */
  tagName: 'li',

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Whether represents an active list item
   *
   * @type {Boolean}
   */
  active: false,

  /**
   * Whether represents a disabled list item
   *
   * @type {Boolean}
   */
  disabled: false,

  /**
   * Ordinal value of the list item
   *
   * @see {@link https://html.spec.whatwg.org/multipage/semantics.html#the-li-element}
   * @type {?Number}
   */
  value: null

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
