import Ember from 'ember';

const {
  get,
  Mixin
} = Ember;

/**
 * Retrieve input data about the input
 *
 * @module
 * @augments ember/Mixin
 * @see {@link http://stackoverflow.com/questions/15727324/for-a-javascript-autocomplete-search-box-must-we-use-the-input-event-handler}
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
   * HTML event: input
   *
   * If contextual action has been proxied to the `onInputData` property then
   * retrieve data and send it
   *
   * @override
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  input(event) {
    if (!Ember.isEmpty(get(this, 'onInput')) && typeof get(this, 'onInput') === 'function') {
      this._super(...arguments);
    }

    let proxiedAction = 'onInputData';

    if (!Ember.isEmpty(get(this, proxiedAction)) && typeof get(this, proxiedAction) === 'function') {
      this.get(proxiedAction)(this.getInputData(event));
    }
  },

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * @typedef InputData
   * @type {Object}
   * @property {Number} allCharactersCount Number of all characters in element's value
   * @property {Object} event Browser event object
   * @property {Number} withoutLineBreaksCount Number of non-line break characters in element's value
   */

  /**
   * Retrieve Input data
   *
   * @param {Object} event Browser event object
   * @returns {InputData}
   */
  getInputData(event) {
    let content = this.$().get(0).value;

    return {
      allCharactersCount: content.length,
      event,
      withoutLineBreaksCount: content.replace(/(?:\r\n|\r|\n)/g, '').length
    };
  }

});
