import Ember from 'ember';

const {
  Component,
  computed,
  get,
  isEmpty,
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

    this.addObservers();
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
  addObservers() {
    const allErrorProperties = new Set(get(this, 'allErrorProperties'));
    const registeredProperties = new Set(get(this, 'registeredErrors'));
    const propertiesNotManaged = new Set(
      [...allErrorProperties].filter(property => !registeredProperties.has(property))
    );

    set(this, 'availableErrors', [...propertiesNotManaged]);

    this.addObserver('registeredErrors.[]', this, 'updateMessages');

    get(this, 'availableErrors').forEach((value) => {
      this.addObserver(`errors.${value}`, this, 'updateMessages');
    });
  },

  /**
   * Remove observers to dynamic properties
   *
   * @returns {undefined}
   */
  removeObservers() {
    this.removeObserver('registeredErrors.[]', this, 'updateMessages');

    get(this, 'availableErrors').forEach((value) => {
      this.removeObserver(`errors.${value}`, this, 'updateMessages');
    });
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

    set(this, 'messages', messages);
  }

});
