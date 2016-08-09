import Ember from 'ember';

const {
  get,
  Mixin
} = Ember;

/**
 * Add bindings for custom HTML data attributes
 *
 * @module
 * @augments ember/Mixin
 * @see {@link https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes}
 */
export default Mixin.create({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  // -------------------------------------------------------------------------
  // Actions

  /**
   * init event hook
   *
   * Bind provided `data-*` attributes
   *
   * @function
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    this.bindAttributes();
  },

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Bind provided `data-*` attributes
   *
   * @returns {undefined}
   */
  bindAttributes() {
    let bindings = get(this, 'attributeBindings');

    Object.keys(this).forEach(function(element) {
      if (/^data-./.test(element.toLowerCase())) {
        bindings.push(element);
      }
    });

    this.set('attributeBindings', bindings);
  }

});
