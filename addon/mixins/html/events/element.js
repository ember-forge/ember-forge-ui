import Ember from 'ember';

const {
  get,
  isEmpty,
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
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  abort(event) {
    this._super(...arguments);

    this.sendEvent('onAbort', event);
  },

  /**
   * HTML event: blur
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-blur}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  blur(event) {
    this._super(...arguments);

    this.sendEvent('onBlur', event);
  },

  /**
   * HTML event: cancel
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-cancel}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  cancel(event) {
    this._super(...arguments);

    this.sendEvent('onCancel', event);
  },

  /**
   * HTML event: canPlay
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-canplay}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  canPlay(event) {
    this._super(...arguments);

    this.sendEvent('onCanPlay', event);
  },

  /**
   * HTML event: canPlayThrough
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-canplaythrough}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  canPlayThrough(event) {
    this._super(...arguments);

    this.sendEvent('onCanPlayThrough', event);
  },

  /**
   * HTML event: change
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-change}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  change(event) {
    this._super(...arguments);

    this.sendEvent('onChange', event);
  },

  /**
   * HTML event: click
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-click}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  click(event) {
    this._super(...arguments);

    this.sendEvent('onClick', event);
  },

  /**
   * HTML event: close
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-close}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  close(event) {
    this._super(...arguments);

    this.sendEvent('onClose', event);
  },

  /**
   * HTML event: contextMenu
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-contextmenu}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  contextMenu(event) {
    this._super(...arguments);

    this.sendEvent('onContextMenu', event);
  },

  /**
   * HTML event: copy
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-copy}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  copy(event) {
    this._super(...arguments);

    this.sendEvent('onCopy', event);
  },

  /**
   * HTML event: cueChange
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-cuechange}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  cueChange(event) {
    this._super(...arguments);

    this.sendEvent('onCueChange', event);
  },

  /**
   * HTML event: cut
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-cut}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  cut(event) {
    this._super(...arguments);

    this.sendEvent('onCut', event);
  },

  /**
   * HTML event: doubleClick
   *
   * HTML specificaiton is actually `dblclick` but Ember uses `doubleClick`
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-dblclick}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  doubleClick(event) {
    this._super(...arguments);

    this.sendEvent('onDoubleClick', event);
  },

  /**
   * HTML event: drag
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-drag}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  drag(event) {
    this._super(...arguments);

    this.sendEvent('onDrag', event);
  },

  /**
   * HTML event: dragEnd
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragend}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  dragEnd(event) {
    this._super(...arguments);

    this.sendEvent('onDragEnd', event);
  },

  /**
   * HTML event: dragEnter
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragenter}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  dragEnter(event) {
    this._super(...arguments);

    this.sendEvent('onDragEnter', event);
  },

  /**
   * HTML event: dragExit
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragexit}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  dragExit(event) {
    this._super(...arguments);

    this.sendEvent('onDragExit', event);
  },

  /**
   * HTML event: dragLeave
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragleave}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  dragLeave(event) {
    this._super(...arguments);

    this.sendEvent('onDragLeave', event);
  },

  /**
   * HTML event: dragOver
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragover}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  dragOver(event) {
    this._super(...arguments);

    this.sendEvent('onDragOver', event);
  },

  /**
   * HTML event: dragStart
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragstart}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  dragStart(event) {
    this._super(...arguments);

    this.sendEvent('onDragStart', event);
  },

  /**
   * HTML event: drop
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-drop}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  drop(event) {
    this._super(...arguments);

    this.sendEvent('onDrop', event);
  },

  /**
   * HTML event: durationChange
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-durationchange}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  durationChange(event) {
    this._super(...arguments);

    this.sendEvent('onDurationChange', event);
  },

  /**
   * HTML event: emptied
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-emptied}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  emptied(event) {
    this._super(...arguments);

    this.sendEvent('onEmptied', event);
  },

  /**
   * HTML event: ended
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-ended}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  ended(event) {
    this._super(...arguments);

    this.sendEvent('onEnded', event);
  },

  /**
   * HTML event: error
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-error}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  error(event) {
    this._super(...arguments);

    this.sendEvent('onError', event);
  },

  /**
   * HTML event: focus
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-focus}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  focus(event) {
    this._super(...arguments);

    this.sendEvent('onFocus', event);
  },

  /**
   * HTML event: focusIn
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/focusin}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  focusIn(event) {
    this._super(...arguments);

    this.sendEvent('onFocusIn', event);
  },

  /**
   * HTML event: focusOut
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/focusout}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  focusOut(event) {
    this._super(...arguments);

    this.sendEvent('onFocusOut', event);
  },

  /**
   * HTML event: gestureChange
   *
   * @see {@link https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  gestureChange(event) {
    this._super(...arguments);

    this.sendEvent('onGestureChange', event);
  },

  /**
   * HTML event: gestureEnd
   *
   * @see {@link https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  gestureEnd(event) {
    this._super(...arguments);

    this.sendEvent('onGestureEnd', event);
  },

  /**
   * HTML event: gestureStart
   *
   * @see {@link https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  gestureStart(event) {
    this._super(...arguments);

    this.sendEvent('onGestureStart', event);
  },

  /**
   * HTML event: input
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-input}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  input(event) {
    this._super(...arguments);

    this.sendEvent('onInput', event);
  },

  /**
   * HTML event: invalid
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-invalid}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  invalid(event) {
    this._super(...arguments);

    this.sendEvent('onInvalid', event);
  },

  /**
   * HTML event: keyDown
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-keydown}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  keyDown(event) {
    this._super(...arguments);

    this.sendEvent('onKeyDown', event);
  },

  /**
   * HTML event: keyPress
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-keypress}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  keyPress(event) {
    this._super(...arguments);

    this.sendEvent('onKeyPress', event);
  },

  /**
   * HTML event: keyUp
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-keyup}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  keyUp(event) {
    this._super(...arguments);

    this.sendEvent('onKeyUp', event);
  },

  /**
   * HTML event: load
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-load}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  load(event) {
    this._super(...arguments);

    this.sendEvent('onLoad', event);
  },

  /**
   * HTML event: loadedData
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-loadeddata}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  loadedData(event) {
    this._super(...arguments);

    this.sendEvent('onLoadedData', event);
  },

  /**
   * HTML event: loadedMetadata
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-loadedmetadata}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  loadedMetadata(event) {
    this._super(...arguments);

    this.sendEvent('onLoadedMetadata', event);
  },

  /**
   * HTML event: loadEnd
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-loadend}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  loadEnd(event) {
    this._super(...arguments);

    this.sendEvent('onLoadEnd', event);
  },

  /**
   * HTML event: loadStart
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-loadstart}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  loadStart(event) {
    this._super(...arguments);

    this.sendEvent('onLoadStart', event);
  },

  /**
   * HTML event: mouseDown
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mousedown}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  mouseDown(event) {
    this._super(...arguments);

    this.sendEvent('onMouseDown', event);
  },

  /**
   * HTML event: mouseEnter
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseenter}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  mouseEnter(event) {
    this._super(...arguments);

    this.sendEvent('onMouseEnter', event);
  },

  /**
   * HTML event: mouseLeave
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseleave}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  mouseLeave(event) {
    this._super(...arguments);

    this.sendEvent('onMouseLeave', event);
  },

  /**
   * HTML event: mouseMove
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mousemove}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  mouseMove(event) {
    this._super(...arguments);

    this.sendEvent('onMouseMove', event);
  },

  /**
   * HTML event: mouseOut
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseout}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  mouseOut(event) {
    this._super(...arguments);

    this.sendEvent('onMouseOut', event);
  },

  /**
   * HTML event: mouseOver
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseover}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  mouseOver(event) {
    this._super(...arguments);

    this.sendEvent('onMouseOver', event);
  },

  /**
   * HTML event: mouseUp
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-mouseup}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  mouseUp(event) {
    this._super(...arguments);

    this.sendEvent('onMouseUp', event);
  },

  /**
   * HTML event: paste
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-paste}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  paste(event) {
    this._super(...arguments);

    this.sendEvent('onPaste', event);
  },

  /**
   * HTML event: pause
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-pause}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  pause(event) {
    this._super(...arguments);

    this.sendEvent('onPause', event);
  },

  /**
   * HTML event: play
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-play}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  play(event) {
    this._super(...arguments);

    this.sendEvent('onPlay', event);
  },

  /**
   * HTML event: playing
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-playing}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  playing(event) {
    this._super(...arguments);

    this.sendEvent('onPlaying', event);
  },

  /**
   * HTML event: progress
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-progress}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  progress(event) {
    this._super(...arguments);

    this.sendEvent('onProgress', event);
  },

  /**
   * HTML event: rateChange
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-ratechange}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  rateChange(event) {
    this._super(...arguments);

    this.sendEvent('onRateChange', event);
  },

  /**
   * HTML event: reset
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-reset}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  reset(event) {
    this._super(...arguments);

    this.sendEvent('onReset', event);
  },

  /**
   * HTML event: resize
   *
   * @see {@link https://drafts.csswg.org/cssom-view/#eventdef-window-resize}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  resize(event) {
    this._super(...arguments);

    this.sendEvent('onResize', event);
  },

  /**
   * HTML event: scroll
   *
   * @see {@link https://drafts.csswg.org/cssom-view/#eventdef-document-scroll}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  scroll(event) {
    this._super(...arguments);

    this.sendEvent('onScroll', event);
  },

  /**
   * HTML event: seeked
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-seeked}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  seeked(event) {
    this._super(...arguments);

    this.sendEvent('onSeeked', event);
  },

  /**
   * HTML event: seeking
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-seeking}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  seeking(event) {
    this._super(...arguments);

    this.sendEvent('onSeeking', event);
  },

  /**
   * HTML event: select
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-select}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  select(event) {
    this._super(...arguments);

    this.sendEvent('onSelect', event);
  },

  /**
   * HTML event: show
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-show}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  show(event) {
    this._super(...arguments);

    this.sendEvent('onShow', event);
  },

  /**
   * HTML event: stalled
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-stalled}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  stalled(event) {
    this._super(...arguments);

    this.sendEvent('onStalled', event);
  },

  /**
   * HTML event: submit
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-submit}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  submit(event) {
    this._super(...arguments);

    this.sendEvent('onSubmit', event);
  },

  /**
   * HTML event: suspend
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-suspend}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  suspend(event) {
    this._super(...arguments);

    this.sendEvent('onSuspend', event);
  },

  /**
   * HTML event: timeUpdate
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-timeupdate}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  timeUpdate(event) {
    this._super(...arguments);

    this.sendEvent('onTimeUpdate', event);
  },

  /**
   * HTML event: toggle
   *
   * @see {@link https://html.spec.whatwg.org/multipage/indices.html#event-toggle}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  toggle(event) {
    this._super(...arguments);

    this.sendEvent('onToggle', event);
  },

  /**
   * HTML event: touchCancel
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/touchcancel}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  touchCancel(event) {
    this._super(...arguments);

    this.sendEvent('onTouchCancel', event);
  },

  /**
   * HTML event: touchEnd
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/touchend}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  touchEnd(event) {
    this._super(...arguments);

    this.sendEvent('onTouchEnd', event);
  },

  /**
   * HTML event: touchMove
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/touchmove}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  touchMove(event) {
    this._super(...arguments);

    this.sendEvent('onTouchMove', event);
  },

  /**
   * HTML event: touchStart
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/touchstart}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  touchStart(event) {
    this._super(...arguments);

    this.sendEvent('onTouchStart', event);
  },

  /**
   * HTML event: volumeChange
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-volumechange}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  volumeChange(event) {
    this._super(...arguments);

    this.sendEvent('onVolumeChange', event);
  },

  /**
   * HTML event: waiting
   *
   * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#event-media-waiting}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  waiting(event) {
    this._super(...arguments);

    this.sendEvent('onWaiting', event);
  },

  /**
   * HTML event: wheel
   *
   * @see {@link https://w3c.github.io/uievents/#event-type-wheel}
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  wheel(event) {
    this._super(...arguments);

    this.sendEvent('onWheel', event);
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
   * @param {Object} event Browser event object
   * @returns {undefined}
   */
  sendEvent(proxiedAction, event) {
    if (!isEmpty(get(this, proxiedAction))) {
      get(this, proxiedAction)(event);
    }
  }

});
