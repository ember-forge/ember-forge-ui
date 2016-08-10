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
   * @returns {undefined}
   */
  keyUp() {
    if (!Ember.isEmpty(get(this, 'onKeyUp')) && typeof get(this, 'onKeyUp') === 'function') {
      this._super(...arguments);
    }

    let proxiedAction = 'onKeyUpData';

    if (!Ember.isEmpty(get(this, proxiedAction)) && typeof get(this, proxiedAction) === 'function') {
      this.get(proxiedAction)(this.getKeyUpData());
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
   * @property {Number} characterCount Number of characters in element's value
   */

  /**
   * Retrieve keyUp data
   *
   * @returns {KeyUpData}
   */
  getKeyUpData() {
    return {
      characterCount: this.$().get(0).value.length
    };
  }

});
