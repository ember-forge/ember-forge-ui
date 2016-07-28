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

  /**
   * Ordinal value of the list item
   *
   * @see {@link https://html.spec.whatwg.org/multipage/semantics.html#the-li-element}
   * @type {?Number}
   */
  value: null,

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
        className = 'ef-nav-list-item';
        break;

      default:
        className = 'ef-list-item';
    }

    get(this, 'classNames').addObject(className);
  }

});
