import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('form/ef-element-error', 'Integration | Component | form/ef element error', {
  integration: true
});

test('Default rendered state', function(assert) {
  this.set('errors', {});

  this.render(hbs`
    {{form/ef-element-error
      errors=errors
      property="testValue"
      validationHasOccurred=false
    }}
  `);

  assert.ok(
    this.$('>:first-child').hasClass('ef-form-element-error'),
    'Has class "ef-form-element-error"'
  );

  assert.notOk(
    this.$('>:first-child').hasClass('ef-error'),
    'Does not have class "ef-error"'
  );

  assert.strictEqual(
    this.$('>:first-child').text().trim(),
    '',
    'No error message is displayed'
  );
});

test('Error message displays when validation has occurred', function(assert) {
  const errorMessage = 'the error message';

  this.set('errors', {
    testValue: errorMessage
  });

  this.render(hbs`
    {{form/ef-element-error
      errors=errors
      property="testValue"
      validationHasOccurred=true
    }}
  `);

  assert.ok(
    this.$('>:first-child').hasClass('ef-error'),
    'Has class "ef-error"'
  );

  assert.strictEqual(
    this.$('>:first-child').text().trim(),
    errorMessage,
    'No error message is displayed'
  );
});

test('onRegisterErrorPatternMatch closure action is called with property value on render', function(assert) {
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
      onRegisterErrorPatternMatch=(action "test-action")
      validationHasOccurred=true
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
      validationHasOccurred=true
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
      validationHasOccurred=true
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
      validationHasOccurred=true
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
