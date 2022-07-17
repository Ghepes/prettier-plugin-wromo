import printer from './printer';
import { options } from './options';
import { Parser, Printer, SupportLanguage } from 'prettier';
import { createSyncFn } from 'synckit';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

// the worker path must be absolute
const parse = createSyncFn(require.resolve('../workers/parse-worker.js'));

export const languages: Partial<SupportLanguage>[] = [
	{
		name: 'wromo',
		parsers: ['wromo'],
		extensions: ['.wromo'],
		vscodeLanguageIds: ['wromo'],
	},
];

export const parsers: Record<string, Parser> = {
	wromo: {
		parse: (source) => parse(source),
		astFormat: 'wromo',
		locStart: (node) => node.start,
		locEnd: (node) => node.end,
	},
};

export const printers: Record<string, Printer> = {
	wromo: printer,
};

const defaultOptions = {
	tabWidth: 2,
};

export { options, defaultOptions };
