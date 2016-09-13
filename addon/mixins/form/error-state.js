import Ember from 'ember';

const {
  addObserver,
  get,
  isEmpty,
  Mixin,
  removeObserver,
  set
} = Ember;

/**
 * Set error state for specified property
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
   * Add observers for dynamic properties
   *
   * @returns {undefined}
   */
  didInsertElement() {
    this._super(...arguments);

    this.addDynamicObservers();
  },

  /**
   * Initialize error state UI
   *
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    this.updateErrorState();
  },

  /**
   * Remove observers for dynamic properties
   *
   * @returns {undefined}
   */
  willDestroyElement() {
    this._super(...arguments);

    this.removeDynamicObservers();
  },

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Error state of element
   *
   * @type {Boolean}
   */
  errorState: false,

  /**
   * Error state of elements
   *
   * @type {?Object}
   */
  errorStates: null,

  /**
   * Property to access on `errorStates` object
   *
   * @type
   */
  property: null,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Add observers to dynamic properties
   *
   * @returns {undefined}
   */
  addDynamicObservers() {
    let property = get(this, 'property');

    if (!isEmpty(property)) {
      addObserver(this, `errorStates.${property}`, this, 'updateErrorState');
    }
  },

  /**
   * Remove observers to dynamic properties
   *
   * @returns {undefined}
   */
  removeDynamicObservers() {
    let property = get(this, 'property');

    removeObserver(this, `errorStates.${property}`, this, 'updateErrorState');
  },

  /**
   * Set `errorState` value to `errorStates.${property}` value
   *
   * @returns {undefined}
   */
  updateErrorState() {
    let property = get(this, 'property');

    set(this, 'errorState', Boolean(get(this, `errorStates.${property}`)));
  }

});
