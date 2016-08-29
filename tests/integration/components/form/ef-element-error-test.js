import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('form/ef-element-error', 'Integration | Component | form/ef element error', {
  integration: true
});

test('Default rendered state', function(assert) {
  const errorMessage = 'the error message';

  this.set('errors', {
    testValue: errorMessage
  });

  this.render(hbs`
    {{form/ef-element-error
      errors=errors
      property="testValue"
    }}
  `);

  assert.ok(
    this.$('>:first-child').hasClass('ef-form-element-error'),
    'Has class "ef-form-element-error"'
  );

  assert.ok(
    this.$('>:first-child').hasClass('ef-hasContent'),
    'Has class "ef-hasContent"'
  );

  assert.strictEqual(
    this.$('>:first-child').text().trim(),
    errorMessage,
    'Error message is displayed'
  );
});

test('`onRegisterError` closure action is called with `property` value on render', function(assert) {
  assert.expect(1);

  const done = assert.async();

  this.on('test-action', function(property) {
    assert.strictEqual(
      property,
      'testValue',
      'Property was expected value'
    );

    done();
  });

  this.render(hbs`
    {{form/ef-element-error
      property="testValue"
      onRegisterError=(action "test-action")
    }}
  `);
});

test('Error message can be overridden in template', function(assert) {
  this.set('errors', {
    testValue: 'the error message'
  });

  this.render(hbs`
    {{#form/ef-element-error
      errors=errors
      property="testValue"
    }}
      new message instead
    {{/form/ef-element-error}}
  `);

  assert.strictEqual(
    this.$('>:first-child').text().trim(),
    'new message instead',
    'Error message was overridden by yielded value'
  );
});

test('Error message can be overridden in template and original message is accessible', function(assert) {
  this.set('errors', {
    testValue: 'the error message'
  });

  this.render(hbs`
    {{#form/ef-element-error
      errors=errors
      property="testValue"
      as |message|
    }}
      new message instead: {{message}}
    {{/form/ef-element-error}}
  `);

  assert.strictEqual(
    this.$('>:first-child').text().trim(),
    'new message instead: the error message',
    'Original error message is accessible'
  );
});

test('Error message can be updated', function(assert) {
  this.set('errors', {
    testValue: 'the error message'
  });

  this.render(hbs`
    {{form/ef-element-error
      errors=errors
      property="testValue"
    }}
  `);

  const newMessage = 'new message';

  this.set('errors.testValue', newMessage);

  assert.strictEqual(
    this.$('>:first-child').text().trim(),
    newMessage,
    'Error message was updated'
  );
});

test('Error message can be updated', function( assert ) {
  this.set('errors', {
    testValue: 'the error message'
  });

  this.render(hbs`
    {{form/ef-element-error
      errors=errors
      property="testValue"
    }}
  `);

  const newMessage = 'new message';

  this.set('errors.testValue', newMessage);

  assert.strictEqual(
    this.$('>:first-child').text().trim(),
    newMessage,
    'Error message was updated'
  );
});
