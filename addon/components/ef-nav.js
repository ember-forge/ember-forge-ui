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

  /**
   * didRender event hook
   *
   * Contextualize the list component
   *
   * @returns {undefined}
   */
  didRender() {
    this._super(...arguments);

    this.setListContext();
  },

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
  inverse: false,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Set context-specific classes on these rendered components:
   *   - ef-list-group-header
   *   - ef-list-header
   *
   * @private
   * @returns {undefined}
   */
  setListContext: function() {
    // ef-list-group-header
    this.$('.ef-list-group-header')
      .removeClass('ef-list-group-header')
      .addClass('ef-nav-list-group-header');

    // ef-list-header
    this.$('.ef-list-header')
      .removeClass('ef-list-header')
      .addClass('ef-nav-list-header');
  }

});
