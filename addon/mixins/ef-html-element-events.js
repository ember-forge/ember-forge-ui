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
   * HTML event: abort
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-abort}
   * @returns {undefined}
   */
  abort() {
    this._super(...arguments);

    this.sendEvent('onAbort');
  },

  /**
   * HTML event: blur
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-blur}
   * @returns {undefined}
   */
  blur() {
    this._super(...arguments);

    this.sendEvent('onBlur');
  },

  /**
   * HTML event: cancel
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-cancel}
   * @returns {undefined}
   */
  cancel() {
    this._super(...arguments);

    this.sendEvent('onCancel');
  },

  /**
   * HTML event: canPlay
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-canplay}
   * @returns {undefined}
   */
  canPlay() {
    this._super(...arguments);

    this.sendEvent('onCanPlay');
  },

  /**
   * HTML event: canPlayThrough
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-canplaythrough}
   * @returns {undefined}
   */
  canPlayThrough() {
    this._super(...arguments);

    this.sendEvent('onCanPlayThrough');
  },

  /**
   * HTML event: change
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-change}
   * @returns {undefined}
   */
  change() {
    this._super(...arguments);

    this.sendEvent('onChange');
  },

  /**
   * HTML event: click
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-click}
   * @returns {undefined}
   */
  click() {
    this._super(...arguments);

    this.sendEvent('onClick');
  },

  /**
   * HTML event: close
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-close}
   * @returns {undefined}
   */
  close() {
    this._super(...arguments);

    this.sendEvent('onClose');
  },

  /**
   * HTML event: contextMenu
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-contextmenu}
   * @returns {undefined}
   */
  contextMenu() {
    this._super(...arguments);

    this.sendEvent('onContextMenu');
  },

  /**
   * HTML event: copy
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-copy}
   * @returns {undefined}
   */
  copy() {
    this._super(...arguments);

    this.sendEvent('onCopy');
  },

  /**
   * HTML event: cueChange
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-cuechange}
   * @returns {undefined}
   */
  cueChange() {
    this._super(...arguments);

    this.sendEvent('onCueChange');
  },

  /**
   * HTML event: cut
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-cut}
   * @returns {undefined}
   */
  cut() {
    this._super(...arguments);

    this.sendEvent('onCut');
  },

  /**
   * HTML event: doubleClick
   *
   * HTML specificaiton is actually `dblclick` but Ember uses `doubleClick`
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-dblclick}
   * @returns {undefined}
   */
  doubleClick() {
    this._super(...arguments);

    this.sendEvent('onDoubleClick');
  },

  /**
   * HTML event: drag
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-drag}
   * @returns {undefined}
   */
  drag() {
    this._super(...arguments);

    this.sendEvent('onDrag');
  },

  /**
   * HTML event: dragEnd
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragend}
   * @returns {undefined}
   */
  dragEnd() {
    this._super(...arguments);

    this.sendEvent('onDragEnd');
  },

  /**
   * HTML event: dragEnter
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragenter}
   * @returns {undefined}
   */
  dragEnter() {
    this._super(...arguments);

    this.sendEvent('onDragEnter');
  },

  /**
   * HTML event: dragExit
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragexit}
   * @returns {undefined}
   */
  dragExit() {
    this._super(...arguments);

    this.sendEvent('onDragExit');
  },

  /**
   * HTML event: dragLeave
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragleave}
   * @returns {undefined}
   */
  dragLeave() {
    this._super(...arguments);

    this.sendEvent('onDragLeave');
  },

  /**
   * HTML event: dragOver
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragover}
   * @returns {undefined}
   */
  dragOver() {
    this._super(...arguments);

    this.sendEvent('onDragOver');
  },

  /**
   * HTML event: dragStart
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragstart}
   * @returns {undefined}
   */
  dragStart() {
    this._super(...arguments);

    this.sendEvent('onDragStart');
  },

  /**
   * HTML event: drop
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-drop}
   * @returns {undefined}
   */
  drop() {
    this._super(...arguments);

    this.sendEvent('onDrop');
  },

  /**
   * HTML event: durationChange
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-durationchange}
   * @returns {undefined}
   */
  durationChange() {
    this._super(...arguments);

    this.sendEvent('onDurationChange');
  },

  /**
   * HTML event: emptied
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-emptied}
   * @returns {undefined}
   */
  emptied() {
    this._super(...arguments);

    this.sendEvent('onEmptied');
  },

  /**
   * HTML event: ended
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-ended}
   * @returns {undefined}
   */
  ended() {
    this._super(...arguments);

    this.sendEvent('onEnded');
  },

  /**
   * HTML event: error
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-error}
   * @returns {undefined}
   */
  error() {
    this._super(...arguments);

    this.sendEvent('onError');
  },

  /**
   * HTML event: focus
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-focus}
   * @returns {undefined}
   */
  focus() {
    this._super(...arguments);

    this.sendEvent('onFocus');
  },

  /**
   * HTML event: focusIn
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/focusin}
   * @returns {undefined}
   */
  focusIn() {
    this._super(...arguments);

    this.sendEvent('onFocusIn');
  },

  /**
   * HTML event: focusOut
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/focusout}
   * @returns {undefined}
   */
  focusOut() {
    this._super(...arguments);

    this.sendEvent('onFocusOut');
  },

  /**
   * HTML event: input
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-input}
   * @returns {undefined}
   */
  input() {
    this._super(...arguments);

    this.sendEvent('onInput');
  },

  /**
   * HTML event: invalid
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-invalid}
   * @returns {undefined}
   */
  invalid() {
    this._super(...arguments);

    this.sendEvent('onInvalid');
  },

  /**
   * HTML event: keyDown
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-keydown}
   * @returns {undefined}
   */
  keyDown() {
    this._super(...arguments);

    this.sendEvent('onKeyDown');
  },

  /**
   * HTML event: keyPress
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-keypress}
   * @returns {undefined}
   */
  keyPress() {
    this._super(...arguments);

    this.sendEvent('onKeyPress');
  },

  /**
   * HTML event: keyUp
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-keyup}
   * @returns {undefined}
   */
  keyUp() {
    this._super(...arguments);

    this.sendEvent('onKeyUp');
  },

  /**
   * HTML event: load
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-load}
   * @returns {undefined}
   */
  load() {
    this._super(...arguments);

    this.sendEvent('onLoad');
  },

  /**
   * HTML event: loadedData
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-loadeddata}
   * @returns {undefined}
   */
  loadedData() {
    this._super(...arguments);

    this.sendEvent('onLoadedData');
  },

  /**
   * HTML event: loadedMetadata
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-loadedmetadata}
   * @returns {undefined}
   */
  loadedMetadata() {
    this._super(...arguments);

    this.sendEvent('onLoadedMetadata');
  },

  /**
   * HTML event: loadEnd
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-loadend}
   * @returns {undefined}
   */
  loadEnd() {
    this._super(...arguments);

    this.sendEvent('onLoadEnd');
  },

  /**
   * HTML event: loadStart
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-loadstart}
   * @returns {undefined}
   */
  loadStart() {
    this._super(...arguments);

    this.sendEvent('onLoadStart');
  },

  /**
   * HTML event: mouseDown
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mousedown}
   * @returns {undefined}
   */
  mouseDown() {
    this._super(...arguments);

    this.sendEvent('onMouseDown');
  },

  /**
   * HTML event: mouseEnter
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseenter}
   * @returns {undefined}
   */
  mouseEnter() {
    this._super(...arguments);

    this.sendEvent('onMouseEnter');
  },

  /**
   * HTML event: mouseLeave
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseleave}
   * @returns {undefined}
   */
  mouseLeave() {
    this._super(...arguments);

    this.sendEvent('onMouseLeave');
  },

  /**
   * HTML event: mouseMove
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mousemove}
   * @returns {undefined}
   */
  mouseMove() {
    this._super(...arguments);

    this.sendEvent('onMouseMove');
  },

  /**
   * HTML event: mouseOut
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseout}
   * @returns {undefined}
   */
  mouseOut() {
    this._super(...arguments);

    this.sendEvent('onMouseOut');
  },

  /**
   * HTML event: mouseOver
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseover}
   * @returns {undefined}
   */
  mouseOver() {
    this._super(...arguments);

    this.sendEvent('onMouseOver');
  },

  /**
   * HTML event: mouseUp
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseup}
   * @returns {undefined}
   */
  mouseUp() {
    this._super(...arguments);

    this.sendEvent('onMouseUp');
  },

  /**
   * HTML event: paste
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-paste}
   * @returns {undefined}
   */
  paste() {
    this._super(...arguments);

    this.sendEvent('onPaste');
  },

  /**
   * HTML event: pause
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-pause}
   * @returns {undefined}
   */
  pause() {
    this._super(...arguments);

    this.sendEvent('onPause');
  },

  /**
   * HTML event: play
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-play}
   * @returns {undefined}
   */
  play() {
    this._super(...arguments);

    this.sendEvent('onPlay');
  },

  /**
   * HTML event: playing
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-playing}
   * @returns {undefined}
   */
  playing() {
    this._super(...arguments);

    this.sendEvent('onPlaying');
  },

  /**
   * HTML event: progress
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-progress}
   * @returns {undefined}
   */
  progress() {
    this._super(...arguments);

    this.sendEvent('onProgress');
  },

  /**
   * HTML event: rateChange
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-ratechange}
   * @returns {undefined}
   */
  rateChange() {
    this._super(...arguments);

    this.sendEvent('onRateChange');
  },

  /**
   * HTML event: reset
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-reset}
   * @returns {undefined}
   */
  reset() {
    this._super(...arguments);

    this.sendEvent('onReset');
  },

  /**
   * HTML event: resize
   *
   * @see {@link https://drafts.csswg.org/cssom-view/#eventdef-window-resize}
   * @returns {undefined}
   */
  resize() {
    this._super(...arguments);

    this.sendEvent('onResize');
  },

  /**
   * HTML event: scroll
   *
   * @see {@link https://drafts.csswg.org/cssom-view/#eventdef-document-scroll}
   * @returns {undefined}
   */
  scroll() {
    this._super(...arguments);

    this.sendEvent('onScroll');
  },

  /**
   * HTML event: seeked
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-seeked}
   * @returns {undefined}
   */
  seeked() {
    this._super(...arguments);

    this.sendEvent('onSeeked');
  },

  /**
   * HTML event: seeking
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-seeking}
   * @returns {undefined}
   */
  seeking() {
    this._super(...arguments);

    this.sendEvent('onSeeking');
  },

  /**
   * HTML event: select
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-select}
   * @returns {undefined}
   */
  select() {
    this._super(...arguments);

    this.sendEvent('onSelect');
  },

  /**
   * HTML event: show
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-show}
   * @returns {undefined}
   */
  show() {
    this._super(...arguments);

    this.sendEvent('onShow');
  },

  /**
   * HTML event: stalled
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-stalled}
   * @returns {undefined}
   */
  stalled() {
    this._super(...arguments);

    this.sendEvent('onStalled');
  },

  /**
   * HTML event: submit
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-submit}
   * @returns {undefined}
   */
  submit() {
    this._super(...arguments);

    this.sendEvent('onSubmit');
  },

  /**
   * HTML event: suspend
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-suspend}
   * @returns {undefined}
   */
  suspend() {
    this._super(...arguments);

    this.sendEvent('onSuspend');
  },

  /**
   * HTML event: timeUpdate
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-timeupdate}
   * @returns {undefined}
   */
  timeUpdate() {
    this._super(...arguments);

    this.sendEvent('onTimeUpdate');
  },

  /**
   * HTML event: toggle
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-toggle}
   * @returns {undefined}
   */
  toggle() {
    this._super(...arguments);

    this.sendEvent('onToggle');
  },

  /**
   * HTML event: touchCancel
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/touchcancel}
   * @returns {undefined}
   */
  touchCancel() {
    this._super(...arguments);

    this.sendEvent('onTouchCancel');
  },

  /**
   * HTML event: touchEnd
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/touchend}
   * @returns {undefined}
   */
  touchEnd() {
    this._super(...arguments);

    this.sendEvent('onTouchEnd');
  },

  /**
   * HTML event: touchMove
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/touchmove}
   * @returns {undefined}
   */
  touchMove() {
    this._super(...arguments);

    this.sendEvent('onTouchMove');
  },

  /**
   * HTML event: touchStart
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/touchstart}
   * @returns {undefined}
   */
  touchStart() {
    this._super(...arguments);

    this.sendEvent('onTouchStart');
  },

  /**
   * HTML event: volumeChange
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-volumechange}
   * @returns {undefined}
   */
  volumeChange() {
    this._super(...arguments);

    this.sendEvent('onVolumeChange');
  },

  /**
   * HTML event: waiting
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-waiting}
   * @returns {undefined}
   */
  waiting() {
    this._super(...arguments);

    this.sendEvent('onWaiting');
  },

  /**
   * HTML event: wheel
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-wheel}
   * @returns {undefined}
   */
  wheel() {
    this._super(...arguments);

    this.sendEvent('onWheel');
  },

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Call proxied closure action
   *
   * @param {String} proxiedAction Proxied action to call
   * @returns {undefined}
   */
  sendEvent(proxiedAction) {
    if (!Ember.isEmpty(this.get(proxiedAction))) {
      this.get(proxiedAction)(...arguments);
    }
  }

});
