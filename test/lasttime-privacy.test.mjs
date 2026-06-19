import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const privacyPagePath = new URL('../src/content/lasttime/privacy.mdx', import.meta.url);
const metaPath = new URL('../src/content/_meta.jsx', import.meta.url);

test('LastTime privacy page is published at the lowercase privacy route', async () => {
  const content = await readFile(privacyPagePath, 'utf8');

  assert.match(content, /^title: LastTime Privacy Policy$/m);
  assert.match(content, /# LastTime Privacy Policy/);
  assert.match(content, /https:\/\/apps\.apppro\.dev\/lasttime\/privacy/);
});

test('LastTime privacy page describes required privacy behavior', async () => {
  const content = await readFile(privacyPagePath, 'utf8');

  assert.match(content, /local/i);
  assert.match(content, /does not create an account/i);
  assert.match(content, /does not sell/i);
  assert.match(content, /does not use third-party advertising/i);
  assert.match(content, /Apple App Store/i);
  assert.match(content, /leak_cheeps_8w@icloud\.com/);
  assert.doesNotMatch(content, /Expo Updates/i);
  assert.doesNotMatch(content, /## \d+\. App Updates/i);
  assert.doesNotMatch(content, /## \d+\. Support Email and Sharing/i);
  assert.doesNotMatch(content, /me@vip\.morfans\.cn/);
});

test('LastTime appears in site metadata', async () => {
  const meta = await readFile(metaPath, 'utf8');

  assert.match(meta, /lasttime:/);
  assert.match(meta, /title: "LastTime"/);
});
