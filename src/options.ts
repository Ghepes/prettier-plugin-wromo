import { SupportOption } from 'prettier';

declare module 'prettier' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface RequiredOptions extends PluginOptions {}
}

export interface PluginOptions {
	wromoSortOrder: SortOrder;
	wromoAllowShorthand: boolean;
}

export const options: Record<keyof PluginOptions, SupportOption> = {
	wromoSortOrder: {
		since: '0.0.1',
		category: 'Wromo',
		type: 'choice',
		default: 'markup | styles',
		description: 'Sort order for markup, scripts, and styles',
		choices: [
			{
				value: 'markup | styles',
				description: 'markup | styles',
			},
			{
				value: 'styles | markup',
				description: 'styles | markup',
			},
		],
	},
	wromoAllowShorthand: {
		since: '0.0.10',
		category: 'Wromo',
		type: 'boolean',
		default: false,
		description: 'Enable/disable attribute shorthand if attribute name and expression are the same',
	},
};

export const parseSortOrder = (sortOrder: SortOrder): SortOrderPart[] =>
	sortOrder.split(' | ') as SortOrderPart[];

export type SortOrder = 'markup | styles' | 'styles | markup';

export type SortOrderPart = 'markup' | 'styles';
