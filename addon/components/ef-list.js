import Ember from 'ember';

const {
  Component,
  get,
  observer,
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
  tagName: '',

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

    this.setListType();
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
  type: null,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Set `tagName` value dependent on `ordered` value
   *
   * @private
   * @returns {undefined}
   */
  setListType() {
    set(this, 'tagName', get(this, 'ordered') ? 'ol' : 'ul');
  }

});
