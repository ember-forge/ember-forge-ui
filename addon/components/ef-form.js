import AriaAttributes from 'ember-forge-ui/mixins/html/attributes/aria';
import ComponentData from 'ember-forge-ui/mixins/component/data';
import DataAttributes from 'ember-forge-ui/mixins/html/attributes/data';
import ElementEvents from 'ember-forge-ui/mixins/html/events/element';
import Ember from 'ember';
import GlobalAttributes from 'ember-forge-ui/mixins/html/attributes/global';

const {
  Component
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
