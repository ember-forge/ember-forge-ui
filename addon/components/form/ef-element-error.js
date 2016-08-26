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
   * Whether the component is being used in block form in the template
   *
   * Is a hack because `hasBlock` is not available within a component, only the template.
   *
   * @see {@link https://github.com/miguelcobain/rfcs/blob/js-has-block/text/0000-js-has-block.md#alternatives}
   * @type {Boolean}
   */
  hasBlock: false,

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

            if (this.isError(message)) {
              return message;
            }
          }
        }
      );
    }
  },

  /**
   * Derive error state from the error message/data
   *
   * Is not an error if value is:
   * - Boolean false, null, or empty string
   * - non-block template usage and Boolean true
   *
   * @param {Boolean|null|Number|String|undefined} error Error message/data
   * @returns {Boolean}
   */
  isError(error) {
    let isError = true;

    if (isEmpty(error) || !error || (!get(this, 'hasBlock') && error === true)) {
      isError = false;
    }

    if (get(this, 'pattern')) {
      try {
        const regularExpression = new RegExp(get(this, 'pattern'));
        isError = regularExpression.test(error);
      }
      catch(err) {}
    }

    return isError;
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
  },

  /**
   * Used to determine whether the component is being used in block form in the template
   *
   * @function
   * @returns {undefined}
   */
  setHasBlock: computed(
    function() {
      this.set('hasBlock', true);
    }
  )
});