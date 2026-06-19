import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const introductionPath = new URL('../src/content/lasttime/index.mdx', import.meta.url);

test('LastTime introduction page presents the marketing story', async () => {
  const content = await readFile(introductionPath, 'utf8');

  assert.match(content, /^title: Introduction$/m);
  assert.match(content, /# LastTime/);
  assert.match(content, /life maintenance dashboard/i);
  assert.match(content, /not a to-do list/i);
  assert.match(content, /not a streak tracker/i);
});

test('LastTime introduction page highlights product features and conversion paths', async () => {
  const content = await readFile(introductionPath, 'utf8');

  assert.match(content, /one tap/i);
  assert.match(content, /templates/i);
  assert.match(content, /calendar/i);
  assert.match(content, /interval/i);
  assert.match(content, /local-first/i);
  assert.match(content, /Lifetime Pro/i);
  assert.match(content, /https:\/\/apps\.apple\.com\/app\/id6778527643/);
  assert.match(content, /https:\/\/apps\.apppro\.dev\/lasttime\/privacy/);
});
