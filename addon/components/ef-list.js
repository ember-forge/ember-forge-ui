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

  /** @type {String} */
//  tagName: '',

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  /**
   * init event hook
   *
   * Set tagname
   * Set context classes
   *
   * @function
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    this.setTagName();
    this.setContextClasses();
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

  /**
   * The context in which the component is being used
   *
   * @type {?String}
   */
  usedAs: null,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Manage class names dependent on context of usage
   *
   * @private
   * @returns {undefined}
   */
  setContextClasses() {
    let className;

    switch(get(this, 'usedAs')) {
      case 'nav':
        className = 'ef-nav-list';
        break;

      default:
        className = 'ef-list';
    }

    get(this, 'classNames').addObject(className);
  },

  /**
   * Set `tagName` element dependent on `ordered` value
   *
   * @private
   * @returns {undefined}
   */
  setTagName() {
    set(this, 'tagName', get(this, 'ordered') ? 'ol' : 'ul');
  }

});
