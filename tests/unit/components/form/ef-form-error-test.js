import Ember from 'ember';
import globalLibraries from '../../../helpers/sl/synchronous/global-libraries';
import sinon from 'sinon';
import { skip } from 'qunit';
import { moduleForComponent, test } from 'ember-qunit';

const {
  run
} = Ember;

moduleForComponent('form/ef-form-error', 'Unit | Component | form/ef form error', {
  needs: [
    'component:ef-list',
    'component:ef-list-item'
  ],

  unit: true
});

test('Default property values', function(assert) {
  const component = this.subject({
    errors: {
      error1: null,
      error2: null
    }
  });

  assert.deepEqual(
    component.get('allErrorProperties'),
    [
      'error1',
      'error2'
    ],
    '"allErrorProperties" property is null by default'
  );

  assert.strictEqual(
    Array.isArray(component.get('availableErrors')),
    true,
    '"availableErrors" property is null by default'
  );

  assert.strictEqual(
    component.get('hasMessages'),
    false,
    '"hasMessages" property is false by default'
  );

  assert.strictEqual(
    Array.isArray(component.get('messages')),
    true,
    '"messages" property is null by default'
  );
});

test('didInsertElement() calls expected methods', function(assert) {
  run.begin();

  const component = this.subject({
    errors: {}
  });
  const observerSpy = sinon.spy(component, 'addDynamicObservers');
  const updateSpy = sinon.spy(component, 'updateAvailableErrors');

  component.didInsertElement();

  assert.ok(
    observerSpy.calledOnce,
    'addDynamicObservers() is called once during didInsertElement'
  );

  assert.ok(
    updateSpy.calledOnce,
    'updateAvailableErrors() is called once during didInsertElement'
  );

  run.end();
});

test('willClearRender() calls expected methods', function(assert) {
  const component = this.subject({
    errors: {}
  });
  const observerSpy = sinon.spy(component, 'removeDynamicObservers');

  this.render();

  component.willClearRender();

  assert.ok(
    observerSpy.calledOnce,
    'removeDynamicObservers() is called once during willClearRender'
  );
});

test('`availableErrors` is populated', function(assert) {
  const component = this.subject({
    errors: {
      error1: 'error1 message',
      error2: 'error2 message'
    },
    registeredErrors: ['error1']
  });

  this.render();

  assert.deepEqual(
    component.get('availableErrors'),
    ['error2'],
    '"availableErrors" is populated as expected'
  );
});

test('`hasMessages` is `true` when there are messages', function(assert) {
  const component = this.subject({
    errors: {
      error3: 'replace with null',
      other: [
        'one'
      ]
    },
    layout: null,
    registeredErrors: ['error1']
  });

  this.render();

  run(() => {
    component.set('errors.error3', null);
  });

  assert.strictEqual(
    component.get('hasMessages'),
    true,
    '"hasMessages" property is true'
  );
});

skip('scheduleMessagesUpdate() sets messages in afterRender', function() {
});

skip('updateAvailableErrors()', function() {
});

test('updateMessages()', function(assert) {
  const component = this.subject({
    errors: {
      error1: 'error1 message',
      error2: 'error2 message',
      error3: 'replace with null',
      other: [
        'one',
        'two'
      ]
    },
    layout: null,
    registeredErrors: ['error1']
  });

  this.render();

  run(() => {
    component.set('errors.error3', null);
  });

  assert.deepEqual(
    component.get('messages'),
    [
      'error2 message',
      'one',
      'two'
    ],
    'updateMessages() updates messages'
  );
});

skip('test all the observer combinations, that they get updated, removed, etc', function() {
});

test('Observer keys are correct', function( assert ) {
  const component = this.subject({
    errors: {
      error1: null,
      error2: null
    },
    registeredErrors: ['error1']
  });

  this.render();

  assert.ok(
    component.__ember_meta__._listeners.includes('availableErrors.[]:change'),
    'availableErrors.[] is being observed'
  );

  assert.ok(
    component.__ember_meta__._listeners.includes('errors.error2:change'),
    'errors.error2 is being observed'
  );

  assert.ok(
    component.__ember_meta__._listeners.includes('registeredErrors.[]:change'),
    'registeredErrors.[] is being observed'
  );
});

test('There are no references to Ember.$, $ or jQuery', function(assert) {
  globalLibraries.setupSpies();

  const component = this.subject({
    errors: {
      theProperty: null
    },
    property: 'theProperty'
  });

  this.render();

  globalLibraries.triggerEvents(component);

  assert.notOk(
    globalLibraries.called(),
    'Global libraries are not referenced in component'
  );

  globalLibraries.restoreSpies();
});

