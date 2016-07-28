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

  /** @type {String} */
  tagName: 'li',

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  /**
   * init event hook
   *
   * Set context classes
   *
   * @function
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    this.setContextClasses();
  },

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Whether the list items are ordered in the list
   *
   * @type {Boolean}
   */
  ordered: false,

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
        className = 'ef-nav-list-divider';
        break;

      default:
        className = 'ef-list-divider';
    }

    get(this, 'classNames').addObject(className);
  }

});
