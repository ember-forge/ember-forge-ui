import Ember from 'ember';
import globalLibraries from '../../../helpers/sl/synchronous/global-libraries';
import sinon from 'sinon';
import { moduleForComponent, test } from 'ember-qunit';

const {
  run
} = Ember;

moduleForComponent('form/ef-form-error', 'Unit | Component | form/ef form error', {
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
    component.get('availableErrors'),
    null,
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
  const component = this.subject({
    errors: {}
  });
  const observerSpy = sinon.spy(component, 'addObservers');

  component.didInsertElement();

  assert.ok(
    observerSpy.calledOnce,
    'addObservers() is called once during didInsertElement'
  );
});

test('willDestroyElement() calls expected methods', function(assert) {
  const component = this.subject({
    errors: {}
  });
  const observerSpy = sinon.spy(component, 'removeObservers');

  this.render();

  component.willDestroyElement();

  assert.ok(
    observerSpy.calledOnce,
    'removeObservers() is called once during willDestroyElement'
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

