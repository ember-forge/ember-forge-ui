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
     * Deregister error property being addressed by an `ef-element-error` component
     *
     * @function actions:deregisterError
     * @param {String} property Name of the error property being deregistered
     * @returns {undefined}
     */
    deregisterError(property) {
      get(this, 'registeredErrors').removeObject(property);
    },

    /**
     * Register error property being addressed by an `ef-element-error` component
     *
     * @function actions:registerError
     * @param {String} property Name of the error property being registered
     * @returns {undefined}
     */
    registerError(property) {
      get(this, 'registeredErrors').addObject(property);
    },

    /**
     * Register whether there's a pattern match against a property's error string
     *
     * @function actions:registerErrorPatternMatch
     * @param {String} property
     * @param {String} id
     * @param {Boolean} state
     * @returns {undefined}
     */
    registerErrorPatternMatch(property, id, state) {
      if (isEmpty(get(this, `registeredPatterns.${property}`))) {
        set(this, `registeredPatterns.${property}`, {});
      }

      set(this, `registeredPatterns.${property}.${id}`, state);

      this.updatePatternMatchingResults();
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
    set(this, 'registeredPatterns', {});

    this.initializePatternMatches();
    this.setErrorState();
    this.addDynamicObservers();
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
   * State of pattern matching of individual `ef-element-error` instances
   *
   * @type {?Object}
   */
  registeredPatterns: null,

  /**
   * Whether (error) properties have successful pattern matches against them
   *
   * @type {?Object}
   */
  patternMatches: null,

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
  addDynamicObservers() {
    Object.keys(get(this, 'errors')).forEach((property) => {
      addObserver(this, `errors.${property}`, get(this, 'generateObserverFunction')(property));
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
   * Initialize pattern matches
   *
   * @returns {undefined}
   */
  initializePatternMatches() {
    set(this, 'patternMatches', {});

    const propertiesHash = {};
    Object.keys(get(this, 'errors')).forEach(function(property) {
      propertiesHash[`patternMatches.${property}`] = null;
    });

    setProperties(this, propertiesHash);
  },

  /**
   * Remove observers to dynamic properties
   *
   * @returns {undefined}
   */
  removeDynamicObservers() {
    Object.keys(get(this, 'errors')).forEach((property) => {
      removeObserver(this, `errors.${property}`, get(this, 'generateObserverFunction')(property));
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
  },

  /**
   * Set whether there is at least a single pattern match or not for the (error) property
   *
   * @returns {undefined}
   */
  updatePatternMatchingResults() {
    const propertiesHash = {};

    Object.keys(get(this, 'registeredPatterns')).forEach((property) => {
      let values = Ember.A();
      Object.keys(get(this, `registeredPatterns.${property}`)).forEach((id) => {
        values.push(get(this, `registeredPatterns.${property}.${id}`));
      });

      propertiesHash[`patternMatches.${property}`] = values.contains(true);
    });

    setProperties(this, propertiesHash);
  }

});
