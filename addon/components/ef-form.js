import AriaAttributes from 'ember-forge-ui/mixins/ef-html-aria-attributes';
import DataAttributes from 'ember-forge-ui/mixins/ef-html-data-attributes';
import ElementEvents from 'ember-forge-ui/mixins/ef-html-element-events';
import Ember from 'ember';
import GlobalAttributes from 'ember-forge-ui/mixins/ef-html-global-attributes';

const {
  Component
} = Ember;

/**
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/ef-html-aria-attributes
 * @augments ember-forge-ui/mixins/ef-html-data-attributes
 * @augments ember-forge-ui/mixins/ef-html-element-events
 * @augments ember-forge-ui/mixins/ef-html-global-attributes
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#the-form-element}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form}
 */
export default Component.extend(AriaAttributes, DataAttributes, ElementEvents, GlobalAttributes, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'autocapitalize',
    'autocomplete',
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

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Specifies whether or not input fields should have autocomplete enabled.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-form-autocomplete}
   * @type {?String}
   */
  autocomplete: null,

  /**
   * Holds the properties the form fields should edit
   *
   * @type {?Object}
   */
  data: null,

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
  novalidate: null

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
