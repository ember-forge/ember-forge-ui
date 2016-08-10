import Ember from 'ember';

const {
  get,
  Mixin
} = Ember;

/**
 * Retrieve data about the selection
 *
 * @module
 * @augments ember/Mixin
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#textFieldSelection}
 * @see {@link http://stackoverflow.com/questions/263743/caret-position-in-textarea-in-characters-from-the-start/3373056#3373056}
 * @see {@link https://github.com/softlayer/sl-ember-components/issues/719}
 */
export default Mixin.create({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  /**
   * HTML event: select
   *
   * If contextual action has been proxied to the `onSelectData` property then
   * retrieve data and send it
   *
   * @override
   * @returns {undefined}
   */
  select() {
    if (!Ember.isEmpty(get(this, 'onSelect')) && typeof get(this, 'onSelect') === 'function') {
      this._super(...arguments);
    }

    let proxiedAction = 'onSelectData';

    if (!Ember.isEmpty(get(this, proxiedAction)) && typeof get(this, proxiedAction) === 'function') {
      this.get(proxiedAction)(this.getSelectionData());
    }
  },

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * @typedef SelectionData
   * @type {Object}
   * @property {null|String} direction Current direction of the selection
   * @property {Number|undefined} endthe Offset to the end of the selection
   * @property {null|String} selectedText The text contained within the selection
   * @property {Number|undefined} start Offset to the start of the selection
   */

  /**
   * Retrieve data about the selection
   *
   * @returns {SelectionData}
   */
  getSelectionData() {
    let element = this.$().get(0);
    let end;
    let selectedText = (window.getSelection) ? window.getSelection().toString() : null;
    let selectionDirection = element.selectionDirection || null;
    let start;

    if (typeof element.selectionStart === 'number' && typeof element.selectionEnd === 'number') {
      start = element.selectionStart;
      end = element.selectionEnd;

    } else {
      if (document.selection && document.selection.createRange) {
        let range = document.selection.createRange();

        if (range && range.parentElement() === element) {
          let len = element.value.length;
          let normalizedValue = element.value.replace(/\r\n/g, '\n');

          // Create a working TextRange that lives only in the input
          let textInputRange = element.createTextRange();
          textInputRange.moveToBookmark(range.getBookmark());

          // Check if the start and end of the selection are at the very end of the input,
          // since moveStart/moveEnd doesn't return what we want in those cases
          let endRange = element.createTextRange();
          endRange.collapse(false);

          if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
            start = end = len;

          } else {
            start = -textInputRange.moveStart('character', -len);
            start += normalizedValue.slice(0, start).split('\n').length - 1;

            if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
                end = len;
            } else {
                end = -textInputRange.moveEnd('character', -len);
                end += normalizedValue.slice(0, end).split('\n').length - 1;
            }
          }
        }
      }
    }

    return {
      direction: selectionDirection,
      end: end,
      selectedText: selectedText,
      start: start
    };
  }

});
