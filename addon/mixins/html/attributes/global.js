import Ember from 'ember';

const {
  Mixin
} = Ember;

/**
 * Add bindings for common HTML attributes
 *
 * @module
 * @augments ember/Mixin
 * @see {@link https://html.spec.whatwg.org/multipage/dom.html#global-attributes}
 */
export default Mixin.create({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'accesskey',
    'contenteditable',
    'contextmenu',
    'dir',
    'draggable',
    'dropzone',
    'hidden',
    'is',
    'itemid',
    'itemprop',
    'itemhref',
    'itemscope',
    'itemtype',
    'lang',
    'spellcheck',
    'style',
    'tabindex',
    'title',
    'translate'
  ],

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Value is used by the user agent as a guide for creating a keyboard shortcut that activates or focuses the element
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#the-accesskey-attribute}
   * @type {?String}
   */
  accesskey: null,

  /**
   * Indicates that the element is editable
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#attr-contenteditable}
   * @type {?Boolean}
   */
  contenteditable: null,

  /**
   * The ID of the element's context menu
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-contextmenu}
   * @type {?String}
   */
  contextmenu: null,

  /**
   * Specifies the element's text directionality
   *
   * @see {@link https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute}
   * @type {?String}
   */
  dir: null,

  /**
   * Whether an element is draggable
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#the-draggable-attribute}
   * @type {?Boolean}
   */
  draggable: null,

  /**
   * Dropzone attribute
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#the-dropzone-attribute}
   * @type {?String}
   */
  dropzone: null,

  /**
   * Indicates that the element is not yet, or is no longer, directly relevant to the page's current state,
   * or that it is being used to declare content to be reused by other parts of the page as opposed to being
   * directly accessed by the user.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute}
   * @type {?Boolean}
   */
  hidden: null,

  /**
   * In support of custom elements
   *
   * @see {@link https://html.spec.whatwg.org/multipage/scripting.html#attr-is}
   * @type {?String}
   */
  is: null,

  /**
   * Elements with an itemscope attribute and an itemtype attribute that references a vocabulary that is defined
   * to support global identifiers for items may also have an itemid attribute specified, to give a global
   * identifier for the item, so that it can be related to other items on pages elsewhere on the Web.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/microdata.html#attr-itemid}
   * @type {?String}
   */
  itemid: null,

  /**
   * Adds one or more properties to one or more items.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute}
   * @type {?String}
   */
  itemprop: null,

  /**
   * Give a list of additional elements to crawl to find the name-value pairs of the item.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/microdata.html#attr-itemref}
   * @type {?String}
   */
  itemhref: null,

  /**
   * An element with the itemscope attribute specified creates a new item, a group of name-value pairs.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/microdata.html#attr-itemscope}
   * @type {?Boolean}
   */
  itemscope: null,

  /**
   * Give the item types of the item.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/microdata.html#attr-itemtype}
   * @type {?String}
   */
  itemtype: null,

  /**
   * Specifies the primary language for the element's contents and for any of the element's attributes that contain text
   *
   * @see {@link https://html.spec.whatwg.org/multipage/dom.html#attr-lang}
   * @type {?String}
   */
  lang: null,

  /**
   * Indicate whether the element is to have its spelling and grammar checked
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#attr-spellcheck}
   * @type {?Boolean}
   */
  spellcheck: null,

  /**
   * As defined by the CSS Style Attributes specification. [CSSATTR]
   *
   * @see {@link https://html.spec.whatwg.org/multipage/dom.html#the-style-attribute}
   * @see {@link https://html.spec.whatwg.org/multipage/references.html#refsCSSATTR}
   * @type {?String}
   */
  style: null,

  /**
   * Indicate that an element is supposed to be focusable, and whether it is supposed to be reachable using sequential
   * focus navigation and, if so, what is to be the relative order of the element for the purposes of sequential
   * focus navigation.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#attr-tabindex}
   * @type {?Number}
   */
  tabindex: null,

  /**
   * Represents advisory information for the element, such as would be appropriate for a tooltip
   *
   * @see {@link https://html.spec.whatwg.org/multipage/dom.html#attr-title}
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-input-title}
   * @type {?String}
   */
  title: null,

  /**
   * Used to specify whether an element's attribute values and the values of its Text node children are to be
   * translated when the page is localized, or whether to leave them unchanged.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/dom.html#attr-translate}
   * @type {?Boolean}
   */
  translate: null

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
