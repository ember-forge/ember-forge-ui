import Ember from 'ember';

const {
  addObserver,
  Component,
  computed: { notEmpty },
  get,
  isEmpty,
  removeObserver,
  run: { scheduleOnce },
  set
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
    'hasMessages:ef-error'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-form-error'
  ],

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  /**
   * Initialize messages array
   *
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    set(this, 'allErrorProperties', Object.keys(get(this, 'errors')));
    set(this, 'availableErrors', Ember.A());
    set(this, 'messages', Ember.A());
    set(this, 'previousAvailableErrors', Ember.A());
  },

  /**
   * - Add observers for dynamic properties
   * - Initialize available errors
   *
   * @returns {undefined}
   */
  didInsertElement() {
    this._super(...arguments);

    this.addDynamicObservers();
    this.updateAvailableErrors();
  },

  /**
   * Remove observers for dynamic properties
   *
   * @returns {undefined}
   */
  willClearRender() {
    this._super(...arguments);

    this.removeDynamicObservers();
  },

  // -------------------------------------------------------------------------
  // Properties

  /**
   * All error properties that exist on the error object
   *
   * @type {?Array}
   */
  allErrorProperties: null,

  /**
   * Error properties that are not being managed by individual `form/ef-element-error` instances
   *
   * @type {?Array}
   */
  availableErrors: null,

  /**
   * Errors object bound to `ef-form` component
   *
   * @type {?Object}
   */
  errors: null,

  /**
   * Whether there are any error messages to display
   *
   * @type {ember/Computed/notEmpty}
   */
  hasMessages: notEmpty('messages'),

  /**
   * Error messages for properties that are not being managed by individual `form/ef-element-error` instances
   *
   * @type {?ember/Array}
   */
  messages: null,

  /**
   * Error properties that are not being managed by individual `form/ef-element-error` instances
   * before updated by observers
   *
   * @type {?Array}
   */
  previousAvailableErrors: null,

  /**
   * Property from `ef-form` component that contains errors being handled by `ef-element-error` components
   *
   * @type {?Object}
   */
  registeredErrors: null,

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
    addObserver(this, 'registeredErrors.[]', this, 'updateAvailableErrors');
    addObserver(this, 'availableErrors.[]', this, 'updateDynamicObservers');
    addObserver(this, 'availableErrors.[]', this, 'updateMessages');
  },

  /**
   * Remove observers to dynamic properties
   *
   * @returns {undefined}
   */
  removeDynamicObservers() {
    removeObserver(this, 'registeredErrors.[]', this, 'updateMessages');
    removeObserver(this, 'availableErrors.[]', this, 'updateDynamicObservers');
    removeObserver(this, 'availableErrors.[]', this, 'updateMessages');

    get(this, 'availableErrors').forEach((value) => {
      removeObserver(this, `errors.${value}`, this, 'updateMessages');
    });
  },

  /**
   * Update observers to dynamic properties
   *
   * @returns {undefined}
   */
  updateDynamicObservers() {
    get(this, 'previousAvailableErrors').forEach((value) => {
      removeObserver(this, `errors.${value}`, this, 'updateMessages');
    });

    get(this, 'availableErrors').forEach((value) => {
      addObserver(this, `errors.${value}`, this, 'updateMessages');
    });
  },

  /**
   * Schedule messages to be updated afterRender
   *
   * @param {Array} messages
   * @returns {undefined}
   */
  scheduleMessagesUpdate(messages) {
    scheduleOnce('afterRender', () => {
      set(this, 'messages', messages);
    });
  },

  /**
   * Determine which errors are being handled by this component
   * (not being handled by individual `ef-element` error instancces)
   *
   * @returns {undefined}
   */
  updateAvailableErrors() {
    const allErrorProperties = new Set(get(this, 'allErrorProperties'));
    const registeredProperties = new Set(get(this, 'registeredErrors'));
    const propertiesNotManaged = new Set(
      [...allErrorProperties].filter(property => !registeredProperties.has(property))
    );

    set(this, 'previousAvailableErrors', get(this, 'availableErrors'));
    set(this, 'availableErrors', [...propertiesNotManaged]);
  },

  /**
   * Update messages array
   *
   * @returns {undefined}
   */
  updateMessages() {
    let messages = [];

    get(this, 'availableErrors').forEach((property) => {
      let theMessage = get(this, `errors.${property}`);

      if (!isEmpty(theMessage)) {
        if (Array.isArray(theMessage)) {
          theMessage.forEach(function(message) {
            messages.push(message);
          });

        } else {
          messages.push(theMessage);
        }
      }
    });

    this.scheduleMessagesUpdate(messages);
  }

});
