import Ember from 'ember';

const {
  get,
  isEmpty,
  Mixin,
  set
} = Ember;

/**
 * ???
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

    this.addObservers();
  },

  /**
   * Initialize error state UI
   *
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    Ember.run.scheduleOnce('afterRender', () => {
      this.updateErrorState();
    });
  },

  /**
   * Remove observers for dynamic properties
   *
   * @returns {undefined}
   */
  willDestroyElement() {
    this._super(...arguments);

    this.removeObservers();
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
  addObservers() {
    let property = get(this, 'property');

    if (!isEmpty(property)) {
      this.addObserver(`errorStates.${property}`, this, 'updateErrorState');
    }
  },

  /**
   * Remove observers to dynamic properties
   *
   * @returns {undefined}
   */
  removeObservers() {
    let property = get(this, 'property');

    this.removeObserver(`errorStates.${property}`, this, 'updateErrorState');
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