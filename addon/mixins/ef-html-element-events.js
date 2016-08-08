import Ember from 'ember';

const {
  Mixin
} = Ember;

/**
 * Proxy all HTML element events to the specified contextual action
 *
 * @module
 * @augments ember/Mixin
 * @see {@link https://html.spec.whatwg.org/multipage/webappapis.html#events}
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
   * Proxy events to specified contextual action
   *
   * init event hook
   *
   * @override
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-abort}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-blur}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-cancel}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-canplay}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-canplaythrough}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-change}
   * @see {@link https://w3c.github.io/uievents/#event-type-click}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-close}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-contextmenu}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-copy}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-cuechange}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-cut}
   * @see {@link https://w3c.github.io/uievents/#event-type-dblclick}
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-drag}
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragend}
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragenter}
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragexit}
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragleave}
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragover}
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragstart}
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-drop}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-durationchange}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-emptied}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-ended}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-error}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-focus}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/focusin}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/focusout}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-input}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-invalid}
   * @see {@link https://w3c.github.io/uievents/#event-type-keydown}
   * @see {@link https://w3c.github.io/uievents/#event-type-keypress}
   * @see {@link https://w3c.github.io/uievents/#event-type-keyup}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-load}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-loadeddata}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-loadedmetadata}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-loadend}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-loadstart}
   * @see {@link https://w3c.github.io/uievents/#event-type-mousedown}
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseenter}
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseleave}
   * @see {@link https://w3c.github.io/uievents/#event-type-mousemove}
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseout}
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseover}
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseup}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-paste}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-pause}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-play}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-playing}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-progress}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-ratechange}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-reset}
   * @see {@link https://drafts.csswg.org/cssom-view/#eventdef-window-resize}
   * @see {@link https://drafts.csswg.org/cssom-view/#eventdef-document-scroll}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-seeked}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-seeking}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-select}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-show}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-stalled}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-submit}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-suspend}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-timeupdate}
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-toggle}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/touchcancel}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/touchend}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/touchmove}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/touchstart}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-volumechange}
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-waiting}
   * @see {@link https://w3c.github.io/uievents/#event-type-wheel}
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    const events = [
      'abort',
      'blur',
      'cancel',
      'canPlay',
      'canPlayThrough',
      'change',
      'click',
      'close',
      'contextMenu',
      'copy',
      'cueChange',
      'cut',
      'doubleClick', // spec is actually `dblclick` but Ember uses `doubleClick`
      'drag',
      'dragEnd',
      'dragEnter',
      'dragExit',
      'dragLeave',
      'dragOver',
      'dragStart',
      'drop',
      'durationChange',
      'emptied',
      'ended',
      'error',
      'focus',
      'focusIn',
      'focusOut',
      'input',
      'invalid',
      'keyDown',
      'keyPress',
      'keyUp',
      'load',
      'loadedData',
      'loadedMetadata',
      'loadEnd',
      'loadStart',
      'mouseDown',
      'mouseEnter',
      'mouseLeave',
      'mouseMove',
      'mouseOut',
      'mouseOver',
      'mouseUp',
      'resize',
      'wheel',
      'paste',
      'pause',
      'play',
      'playing',
      'progress',
      'rateChange',
      'reset',
      'scroll',
      'seeked',
      'seeking',
      'select',
      'show',
      'stalled',
      'submit',
      'suspend',
      'timeUpdate',
      'toggle',
      'touchCancel',
      'touchEnd',
      'touchMove',
      'touchStart',
      'volumeChange',
      'waiting'
    ];

    // Add proxy for each HTML event
    events.forEach((element) => {
      let property = 'on' + element.charAt(0).toUpperCase() + element.slice(1);

      // only if an action has been specified for the component
      if (typeof this.get(property) === 'function') {
        this[element] = function() {
          if (!Ember.isEmpty(this.get(property))) {
            this._super(...arguments);

            this.get(property)(...arguments);
          }
        };
      }
    });
  }

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
