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
  classNameBindings: [
    'inline:ef-inline',
    'inverse:ef-inverse'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-nav'
  ],

  /** @type {String} */
  tagName: 'nav',

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Whether to display the nav items inline
   *
   * @type {Boolean}
   */
  inline: false,

  /**
   * Whether to inverse the color scheme
   *
   * @type {Boolean}
   */
  inverse: false

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
