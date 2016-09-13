import Ember from 'ember';

const {
  addObserver,
  Component,
  computed,
  get,
  isEmpty,
  removeObserver,
  run,
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
    set(this, 'messages', Ember.A());
  },

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
  hasMessages: computed.notEmpty('messages'),

  /**
   * Error messages for properties that are not being managed by individual `form/ef-element-error` instances
   *
   * @type {?ember/Array}
   */
  messages: null,

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

// react to "registeredErrors" changes by calling "updateAvailableErrors()" (which updates "availableErrors")
    addObserver(this, 'registeredErrors.[]', this, 'updateAvailableErrors');

// react to "availableErrors" changes by removing previous observers and adding new ones (that call "updateMessages")
    addObserver(this, 'availableErrors.[]', this, 'updateDynamicObservers');
  },

  /**
   * Remove observers to dynamic properties
   *
   * @returns {undefined}
   */
  removeDynamicObservers() {
    removeObserver(this, 'registeredErrors.[]', this, 'updateMessages');

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
console.warn('this needs to be against a previously-known list, not the new one already updated');
    get(this, 'availableErrors').forEach((value) => {
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
    run.scheduleOnce('afterRender', () => {
      set(this, 'messages', messages);
    });
  },

  updateAvailableErrors() {
    const allErrorProperties = new Set(get(this, 'allErrorProperties'));
    const registeredProperties = new Set(get(this, 'registeredErrors'));
    const propertiesNotManaged = new Set(
      [...allErrorProperties].filter(property => !registeredProperties.has(property))
    );

    set(this, 'availableErrors', [...propertiesNotManaged]);
  },

  /**
   * Update messages array
   *
   * @returns {undefined}
   */
  updateMessages() {
    let messages = [];
console.info('ef-form-error updateMessages()');
console.log('availableErrors', get(this, 'availableErrors'));
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
