import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('form/ef-form-error', 'Integration | Component | form/ef form error', {
  integration: true
});

test('Default rendered state', function(assert) {
  this.set('errors', {});

  this.render(hbs`
    {{form/ef-form-error
      errors=errors
    }}
  `);

  assert.ok(
    this.$('>:first-child').hasClass('ef-form-error'),
    'Has class "ef-form-error"'
  );
});

test('When displaying error messages', function(assert) {
  this.set('errors', {
    error1: 'error1 message',
    error2: 'error2 message'
  });

  this.set('registeredErrors', ['error1']);

  this.render(hbs`
    {{form/ef-form-error
      errors=errors
      registeredErrors=registeredErrors
    }}
  `);

  this.set('errors.error2', 'updated');

  assert.ok(
    this.$('>:first-child').hasClass('ef-error'),
    'Has class "ef-error"'
  );
});

test('Messages update', function(assert) {
  this.set('errors', {
    error1: 'error1 message',
    error2: 'error2 message'
  });

  this.set('registeredErrors', ['error1']);

  this.render(hbs`
    {{form/ef-form-error
      errors=errors
      registeredErrors=registeredErrors
    }}
  `);

  this.set('errors.error2', 'updated');
  this.set('errors.error2', 'updated again');

  assert.strictEqual(
    this.$('>:first-child').text().trim(),
    'updated again',
    'Messagse are updated'
  );
});
