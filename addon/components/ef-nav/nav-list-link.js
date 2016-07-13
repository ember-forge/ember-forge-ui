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
    'href'
  ],

  /** @type {String[]} */
  classNameBindings: [
    'active:ef-active',
    'disabled:ef-disabled'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-nav-list-link'
  ],

  /** @type {String} */
  tagName: 'a',

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  /**
   * Click event handler
   *
   * Execute bound action
   *
   * @function
   * @param {Event} event - The raw click event
   * @returns {undefined}
   */
  click() {
    this.get( 'onClick' )();
  },

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Whether represents an active link
   *
   * @type {Boolean}
   */
  active: false,

  /**
   * Whether represents a disabled link
   *
   * @type {Boolean}
   */
  disabled: false,

  /**
   * `href` attribute value
   *
   * @type {String}
   */
  href: '#'

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
