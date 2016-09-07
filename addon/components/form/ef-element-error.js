import Ember from 'ember';

const {
  Component,
  computed,
  get,
  isEmpty
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
    'hasMessage:ef-error'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-form-element-error'
  ],

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  /**
   * - Create dynamic computed properties
   * - Register that error property is being handled at the element level
   *
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    this.createComputedProperties();
    this.registerError();
  },

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Whether there is an error messages to display
   *
   * @type {ember/Computed/notEmpty}
   */
  hasMessage: computed.notEmpty('message'),

  /**
   * Regular expression pattern to apply to error message.
   *
   * Should not contain delimeters around the pattern.
   *
   * @type {?String}
   */
  pattern: null,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Define and assign dynamic computed properties
   *
   * - `message` is a bound property between the element's value and the property on the error object
   *
   * @returns {undefined}
   */
  createComputedProperties() {
    const property = get(this, 'property');

    if (!isEmpty(property) && !Array.isArray(get(this, `errors.${property}`))) {
      this.message = computed(
        `errors.${property}`,
        'pattern',
        {
          get() {
            const property = get(this, 'property');
            const error = `errors.${property}`;
            const message = get(this, error);

            return message;
          }
        }
      );
    }
  },

  /**
   * Register that this element's error message is being addressed.
   *
   * Do so by calling the `onRegisterError` closure action
   *
   * @returns {undefined}
   */
  registerError() {
    const property = get(this, 'property');
    const proxiedAction = 'onRegisterError';

    if (
      !isEmpty(property) &&
      !Array.isArray(get(this, `errors.${property}`)) &&
      !isEmpty(get(this, proxiedAction)) &&
      typeof get(this, proxiedAction) === 'function'
    ) {
      get(this, proxiedAction)(property);
    }
  }
});
