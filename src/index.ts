import type { Config } from 'stylelint';

export interface DefineConfig {
  extends?: string[];
  plugins?: string[];
  rules?: Config['rules'];
}

export function defineConfig(config?: DefineConfig): Config {
  const { extends: inherit, plugins, rules } = config ?? {};
  const getExtends = inherit ?? [];
  const getPlugins = plugins ?? [];
  return {
    extends: [
      'stylelint-config-recommended',
      'stylelint-prettier/recommended',
      'stylelint-config-recommended-scss',
      'stylelint-config-recommended-vue/scss',
      ...getExtends,
    ],
    plugins: ['stylelint-prettier', 'stylelint-order', ...getPlugins],
    rules: {
      'prettier/prettier': true,
      'no-descending-specificity': null,
      'declaration-property-value-no-unknown': null,
      'order/order': ['custom-properties', 'declarations'],
      'order/properties-order': ['width', 'height'],
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: [
            'deep',
            'v-deep',
            'v-bind',
            'global',
            'v-global',
            'slotted',
            'v-slotted',
          ],
        },
      ],
      ...rules,
    },
  };
}
