const { runAsWorker } = require('synckit');

runAsWorker(async (node) => {
	const dynamicImport = new Function('file', 'return import(file)');
	const { serialize } = await dynamicImport('@wromojs/compiler/utils');
	return await serialize(node);
});
