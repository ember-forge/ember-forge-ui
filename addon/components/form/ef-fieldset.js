import Ember from 'ember';
import GlobalAttributes from 'ember-forge-ui/mixins/ef-html-global-attributes';

const {
  Component
} = Ember;

/**
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/ef-html-global-attributes
 */
export default Component.extend(GlobalAttributes, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'disabled',
    'form',
    'name'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-fieldset'
  ],

  /** @type {String} */
  tagName: 'fieldset',

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * When specified, causes all the form control descendants of the fieldset element,
   * excluding those that are descendants of the fieldset element's first legend element child,
   * if any, to be disabled.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fieldset-disabled}
   * @type {?String}
   */
  disabled: null,

  /**
   * Associates the control with a form element
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#the-fieldset-element}
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fae-form}
   * @type {?String}
   */
  form: null,

  /**
   * Name of form control to use in the form.elements API
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#the-fieldset-element}
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-name}
   * @type {?String}
   */
  name: null

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
