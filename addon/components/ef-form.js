import AriaAttributes from 'ember-forge-ui/mixins/html/attributes/aria';
import ComponentData from 'ember-forge-ui/mixins/component/data';
import DataAttributes from 'ember-forge-ui/mixins/html/attributes/data';
import ElementEvents from 'ember-forge-ui/mixins/html/events/element';
import Ember from 'ember';
import GlobalAttributes from 'ember-forge-ui/mixins/html/attributes/global';

const {
  addObserver,
  Component,
  get,
  isEmpty,
  removeObserver,
  set,
  setProperties
} = Ember;

/**
 * form HTML element
 *
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/component/data
 * @augments ember-forge-ui/mixins/html/attributes/aria
 * @augments ember-forge-ui/mixins/html/attributes/data
 * @augments ember-forge-ui/mixins/html/attributes/global
 * @augments ember-forge-ui/mixins/html/events/element
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#the-form-element}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form}
 */
export default Component.extend(AriaAttributes, ComponentData, DataAttributes, ElementEvents, GlobalAttributes, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'autocapitalize',
    'autocomplete',
    'autocorrect',
    'name',
    'novalidate'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-form'
  ],

  /** @type {String} */
  tagName: 'form',

  // -------------------------------------------------------------------------
  // Actions

  /** @type {Object} */
  actions: {

    /**
     * Register error property being addressed by an `ef-element-error` component
     *
     * @function actions:registerError
     * @param {String} property Name of the error property being registered
     * @returns {undefined}
     */
    registerError(property) {
      get(this, 'registeredErrors').addObject(property);
    }
  },

  // -------------------------------------------------------------------------
  // Events

  /**
   * Initialize property values
   * Add observers for dynamic properties
   *
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    set(this, 'errorStates', {});
    set(this, 'registeredErrors', Ember.A());

    this.setErrorState();
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
   * Controls whether and how the text value for textual form control descendants
   * should be automatically capitalized as it is entered/edited by the user
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form}
   * @see {@link https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html}
   * @type {?String}
   */
  autocapitalize: null,

  /**
   * Specifies whether or not input fields should have autocomplete enabled.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-form-autocomplete}
   * @type {?String}
   */
  autocomplete: null,

  /**
   * Specifies a form field allows automatic correction.
   *
   * @see {@link https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html}
   * @type {?String}
   */
  autocorrect: null,

  /**
   * Holds the properties the form fields should edit
   *
   * @type {?Object}
   */
  data: null,

  /**
   * Holds the error messages associated with each property
   *
   * @type {?Object}
   */
  errors: null,

  /**
   * Error state of elements
   *
   * @type {?Object}
   */
  errorStates: null,

  /**
   * Represents the form's name within the forms collection
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-form-name}
   * @type {?String}
   */
  name: null,

  /**
   * Indicate that the form is not to be validated during submission
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fs-novalidate}
   * @type {?Boolean}
   */
  novalidate: null,

  /**
   * Array of registered error properties
   *
   * @type {?ember/Array}
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
    Object.keys(get(this, 'errors')).forEach((value) => {
      addObserver(this, `errors.${value}`, get(this, 'generateObserverFunction')(value));
    });
  },

  /**
   * Generate function to be called by observed property changes
   *
   * @param {String} property
   * @returns {Function}
   */
  generateObserverFunction(property) {
    return function() {
      this.setErrorState(property, this);
    };
  },

  /**
   * Remove observers to dynamic properties
   *
   * @returns {undefined}
   */
  removeObservers() {
    Object.keys(get(this, 'errors')).forEach((value) => {
      removeObserver(this, `errors.${value}`, get(this, 'generateObserverFunction')(value));
    });
  },

  /**
   * Initialize all error states or set whether a data property is in an error state or not
   *
   * @returns {undefined}
   */
  setErrorState(property, context) {
    context = context || this;

    // Initialization
    if (isEmpty(property)) {
      const propertiesHash = {};

      Object.keys(get(this, 'errors')).forEach(function(value) {
        let property = value.replace('errors.', '');
        propertiesHash[`errorStates.${property}`] = !isEmpty(get(context, `errors.${property}`));
      });

      setProperties(context, propertiesHash);

    // Observers
    } else {
      set(context, `errorStates.${property}`, !isEmpty(get(context, `errors.${property}`)));
    }
  }

});
