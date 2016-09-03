import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('form/ef-form-text', 'Integration | Component | form/ef form text', {
  integration: true
});

test('Default rendered state', function(assert) {
  this.render(hbs`
    {{form/ef-form-text}}
  `);

  assert.ok(
    this.$('>:first-child').hasClass('ef-form-text'),
    'Has class "ef-form-text"'
  );
});

test('Non-block form', function(assert) {
  const text = 'sample non-block text';

  this.set('text', text);

  this.render(hbs`
    {{form/ef-form-text text=text}}
  `);

  assert.strictEqual(
    this.$('>:first-child').text().trim(),
    text,
    '`text` property is rendered in non-block form'
  );
});

test('Block form', function(assert) {
  const text = 'sample block text';

  this.set('text', text);

  this.render(hbs`
    {{#form/ef-form-text text="should not render"}}
      {{text}}
    {{/form/ef-form-text}}
  `);

  assert.strictEqual(
    this.$('>:first-child').text().trim(),
    text,
    '`text` property is rendered in block form'
  );
});
