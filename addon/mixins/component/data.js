import Ember from 'ember';

const {
  get,
  isEmpty,
  Mixin,
  typeOf
} = Ember;

/**
 * Provide information about the component after it is created
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
   * didInsertElement event hook
   *
   * Send this data about the component:
   * - elementId
   *
   * @returns {undefined}
   */
  didInsertElement() {
    this._super(...arguments);

    let proxiedAction = 'onCreateData';

    if (!isEmpty(get(this, proxiedAction)) && typeOf(get(this, proxiedAction)) === 'function') {
      let data = {};
      data.id = get(this, 'elementId');

      this.get(proxiedAction)(data);
    }
  }

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
