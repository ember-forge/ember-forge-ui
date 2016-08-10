import AriaAttributes from 'ember-forge-ui/mixins/ef-html-aria-attributes';
import ComponentData from 'ember-forge-ui/mixins/ef-component-data';
import DataAttributes from 'ember-forge-ui/mixins/ef-html-data-attributes';
import ElementEvents from 'ember-forge-ui/mixins/ef-html-element-events';
import Ember from 'ember';
import GlobalAttributes from 'ember-forge-ui/mixins/ef-html-global-attributes';

const {
  Component,
  get
} = Ember;

/**
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/ef-component-data
 * @augments ember-forge-ui/mixins/ef-html-aria-attributes
 * @augments ember-forge-ui/mixins/ef-html-data-attributes
 * @augments ember-forge-ui/mixins/ef-html-element-events
 * @augments ember-forge-ui/mixins/ef-html-global-attributes
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#the-button-element}
 */
export default Component.extend(AriaAttributes, ComponentData, DataAttributes, ElementEvents, GlobalAttributes, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'autofocus',
    'disabled',
    'form',
    'menu',
    'name',
    'type',
    'value'
  ],

  /** @type {String[]} */
  classNameBindings: [
    'disabled:ef-disabled',
    'pending:ef-pending'
  ],

  /** @type {String} */
  tagName: 'button',

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  /**
   * init event hook
   *
   * Set context classes
   *
   * @function
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    this.setContextClasses();
  },

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Indicate that a control is to be focused as soon as the page is loaded
   * or as soon as the dialog within which it finds itself is shown.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-autofocus}
   * @type {?Boolean}
   */
  autofocus: null,

  /**
   * Whether is disabled
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-disabled}
   * @type {?Boolean}
   */
  disabled: null,

  /**
   * Form associated with
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fae-form}
   * @type {?String}
   */
  form: null,

  /**
   * The ID of the element's menu
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-button-menu}
   * @type {?String}
   */
  menu: null,

  /**
   * Name of the form control
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-name}
   * @type {?String}
   */
  name: null,

  /**
   * Whether to display the `pendingText`
   *
   * @type {Boolean}
   */
  pending: false,

  /**
   * Text to display when used in non-block form and `pending` is true
   *
   * @type {?String}
   */
  pendingText: null,

  /**
   * Text to display when used in non-block form
   *
   * @type {?String}
   */
  text: null,

  /**
   * Button type
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-button-type}
   * @type {String}
   */
  type: 'button',

  /**
   * Element's value for the purposes of form submission
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-button-value}
   * @type {[type]}
   */
  value: null,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Manage class names dependent on context of usage
   *
   * @private
   * @returns {undefined}
   */
  setContextClasses() {
    let className;

    switch(get(this, 'type').toLowerCase()) {
      case 'button':
        className = 'ef-button';
        break;

      case 'menu':
        className = 'ef-button-menu';
        break;

      case 'reset':
        className = 'ef-button-reset';
        break;

      case 'submit':
        className = 'ef-button-submit';
        break;
    }

    if(className) {
      get(this, 'classNames').addObject(className);
    }
  }

});
