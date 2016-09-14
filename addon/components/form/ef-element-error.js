import Ember from 'ember';
import ErrorState from 'ember-forge-ui/mixins/form/error-state';

const {
  addObserver,
  Component,
  computed: { notEmpty },
  get,
  isEmpty,
  removeObserver,
  run: { scheduleOnce },
  set,
  typeOf
} = Ember;

/**
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/form/error-state
 */
export default Component.extend(ErrorState, {

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
   * - Register that error property is being handled at the element level
   * - Add observers for dynamic properties
   * - Initialize pattern matching and message display
   *
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    const property = get(this, 'property');

    if (!isEmpty(property) && !Array.isArray(get(this, `errors.${property}`))) {
      this.registerError();
      this.addDynamicObservers();

      this.updateMessage();
    }
  },

  /**
   * Remove observers for dynamic properties
   *
   * @returns {undefined}
   */
  willClearRender() {
    this._super(...arguments);

    this.removeDynamicObservers();
    this.deregisterError();
  },

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Whether there is an error messages to display
   *
   * @type {ember/Computed/notEmpty}
   */
  hasMessage: notEmpty('message'),

  /**
   * Error message to display
   *
   * @type {?String}
   */
  message: null,

  /**
   * Regular expression pattern to apply to error message.
   *
   * Should not contain delimeters around the pattern.
   *
   * @type {?String}
   */
  pattern: null,

  /**
   * Whether (error) properties have successful pattern matches against them
   *
   * @type {?Object}
   */
  patternMatches: null,

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
    const property = get(this, 'property');

    addObserver(this, `errors.${property}`, this, 'updateMessage');
    addObserver(this, 'pattern', this, 'updateMessage');
    addObserver(this, `patternMatches.${property}`, this, 'updateMessage');
  },

  /**
   * Deregister that this element's error message is being addressed.
   *
   * Do so by calling the `onDeregisterError` closure action
   *
   * @returns {undefined}
   */
  deregisterError() {
    const property = get(this, 'property');
    const proxiedAction = 'onDeregisterError';

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
   * Register whether there's a pattern match against a property's error string
   *
   * Do so by calling the `onRegisterErrorPatternMatch` closure action
   *
   * @param {Boolean} state
   * @returns {undefined}
   */
  registerErrorPatternMatch(state) {
    const proxiedAction = 'onRegisterErrorPatternMatch';

    if (!isEmpty(get(this, proxiedAction)) && typeOf(get(this, proxiedAction) === 'function')) {
      get(this, proxiedAction)(get(this, 'property'), get(this, 'elementId'), state);
    }
  },

  /**
   * Remove observers to dynamic properties
   *
   * @returns {undefined}
   */
  removeDynamicObservers() {
    const property = get(this, 'property');

    removeObserver(this, `errors.${property}`, this, 'updateMessage');
    removeObserver(this, 'pattern', this, 'updateMessage');
    removeObserver(this, `patternMatches.${property}`, this, 'updateMessage');
  },

  /**
   * Schedule message to be updated afterRender
   *
   * @param {?String} message
   * @returns {undefined}
   */
  scheduleMessageUpdate(message) {
    scheduleOnce('afterRender', () => {
      set(this, 'message', message);
    });
  },

  /**
   * Set message for display based on error state, pattern match, and aggregate pattern matching fallback
   *
   * @returns {undefined}
   */
  updateMessage() {
    const pattern = get(this, 'pattern');
    const property = get(this, 'property');
    let errorMessage = get(this, `errors.${property}`);

    if (pattern !== null) {
      try {
        const regularExpression = new RegExp(pattern);

        if (get(this, 'errorState') === true && regularExpression.test(errorMessage)) {
          this.registerErrorPatternMatch(true);

        } else {
          this.registerErrorPatternMatch(false);
          errorMessage = null;
        }

      } catch(e) {
        this.registerErrorPatternMatch(false);
        errorMessage = null;
      }

    } else {
      this.registerErrorPatternMatch(false);

      if (get(this, `patternMatches.${property}`) === true ) {
        errorMessage = null;
      }
    }

    this.scheduleMessageUpdate(errorMessage);
  }

});
