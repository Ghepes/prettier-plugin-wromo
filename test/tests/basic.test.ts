import { test } from '../test-utils';

const files = import.meta.glob('/test/fixtures/basic/*/*', {
	assert: { type: 'raw' },
});

test('Can format a basic wromo file', files, 'basic/basic-html');

test('Can format an Wromo file with a single style element', files, 'basic/single-style-element');

test('Can format a basic wromo only text', files, 'basic/simple-text');

test('Can format html comments', files, 'basic/html-comment');
