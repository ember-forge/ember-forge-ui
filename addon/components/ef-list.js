import Ember from 'ember';

const {
  Component,
  get,
  set
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
    'reversed',
    'start',
    'type'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-list'
  ],

  /** @type {String} */
  tagName: null,

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  /**
   * init event hook
   *
   * Sets tagname to `ol` or `ul` dependent on the `ordered` property value
   *
   * @function
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    set(this, tagName, get('ordered') ? 'ol' : 'ul');
  },

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Whether to order the list items
   *
   * @type {Boolean}
   */
  ordered: false,

  /**
   * Whether to reverse the order of the list items
   *
   * @type {Boolean}
   */
  reversed: false,

  /**
   * The ordinal value of the first list item
   *
   * @type {?Number}
   */
  start: null,

  /**
   * The kind of marker to use in the list
   *
   * @type {?String}
   */
  type: null

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
