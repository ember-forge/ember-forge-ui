import AriaAttributes from 'ember-forge-ui/mixins/ef-html-aria-attributes';
import ComponentData from 'ember-forge-ui/mixins/ef-component-data';
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
 * @augments ember-forge-ui/mixins/ef-component-data
 * @augments ember-forge-ui/mixins/ef-html-aria-attributes
 * @augments ember-forge-ui/mixins/ef-html-data-attributes
 * @augments ember-forge-ui/mixins/ef-html-global-attributes
 * @augments ember-forge-ui/mixins/ef-html-element-events
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#the-fieldset-element}
 */
export default Component.extend(AriaAttributes, ComponentData, DataAttributes, ElementEvents, GlobalAttributes, {

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

  /**
   * Set the first `label` element's `for` attribute with the `id` of the first labelable element with a set `id`
   *
   * didInsertElement event hook
   *
   * @returns {undefined}
   */
  didInsertElement() {
    this._super(...arguments);

    /**
     * These are elements that can be associated with a label element.
     *
     * Also only selecting those that have an id set on them
     *
     * @see {@link https://html.spec.whatwg.org/multipage/forms.html#category-label}
     * @type {String}
     */
    let selector = 'button[id], input[type!="hidden"][id], meter[id], output[id], progress[id], select[id], textarea[id]';

    // Find first existence of a labelable element that has an id set
    let $labelableElement = this.$().children(selector).first();

    let $label = this.$('label');

    if ($labelableElement && $label.get(0) && $label.first().attr('for') === undefined) {
      $label.attr('for', $labelableElement.prop('id'));
    }
  },

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
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fae-form}
   * @type {?String}
   */
  form: null,

  /**
   * Name of form control to use in the form.elements API
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-name}
   * @type {?String}
   */
  name: null

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
