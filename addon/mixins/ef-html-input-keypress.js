import Ember from 'ember';

const {
  get,
  Mixin
} = Ember;

/**
 * Retrieve keyPress data about the input
 *
 * @module
 * @augments ember/Mixin
 */
export default Mixin.create({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  /**
   * HTML event: keyPress
   *
   * If contextual action has been proxied to the `onKeyPressData` property then
   * retrieve data and send it
   *
   * @override
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  keyPress(event) {
    if (!Ember.isEmpty(get(this, 'onKeyPress')) && typeof get(this, 'onKeyPress') === 'function') {
      this._super(...arguments);
    }

    let proxiedAction = 'onKeyPressData';

    if (!Ember.isEmpty(get(this, proxiedAction)) && typeof get(this, proxiedAction) === 'function') {
      this.get(proxiedAction)(this.getKeyPressData(event));
    }
  },

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * @typedef KeyPressData
   * @type {Object}
   * @property {Number} allCharactersCount Number of all characters in element's value
   * @property {Object} event Browser event object
   * @property {Number} withoutLineBreaksCount Number of non-line break characters in element's value
   */

  /**
   * Retrieve KeyPress data
   *
   * @param {Object} event Browser event object
   * @returns {KeyPressData}
   */
  getKeyPressData(event) {
    let content = this.$().get(0).value;

    return {
      allCharactersCount: content.length,
      event,
      withoutLineBreaksCount: content.replace(/(?:\r\n|\r|\n)/g, '').length
    };
  }

});
