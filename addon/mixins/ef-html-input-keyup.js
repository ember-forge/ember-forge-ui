import Ember from 'ember';

const {
  get,
  Mixin
} = Ember;

/**
 * Retrieve keyUp data about the input
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
   * HTML event: keyUp
   *
   * If contextual action has been proxied to the `onKeyUpData` property then
   * retrieve data and send it
   *
   * @override
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  keyUp(event) {
    if (!Ember.isEmpty(get(this, 'onKeyUp')) && typeof get(this, 'onKeyUp') === 'function') {
      this._super(...arguments);
    }

    let proxiedAction = 'onKeyUpData';

    if (!Ember.isEmpty(get(this, proxiedAction)) && typeof get(this, proxiedAction) === 'function') {
      this.get(proxiedAction)(this.getKeyUpData(event));
    }
  },

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * @typedef KeyUpData
   * @type {Object}
   * @property {Number} allCharactersCount Number of all characters in element's value
   * @property {Object} event Browser event object
   * @property {Number} withoutLineBreaksCount Number of non-line break characters in element's value
   */

  /**
   * Retrieve keyUp data
   *
   * @param {Object} event Browser event object
   * @returns {KeyUpData}
   */
  getKeyUpData(event) {
    let content = this.$().get(0).value;

    return {
      allCharactersCount: content.length,
      event,
      withoutLineBreaksCount: content.replace(/(?:\r\n|\r|\n)/g, '').length
    };
  }

});
