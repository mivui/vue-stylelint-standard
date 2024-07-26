# ⚡vue-stylelint-standard

#### quickly start stylelint in vue.
[![npm version](https://img.shields.io/npm/v/vue-stylelint-standard.svg?style=flat-square)](https://www.npmjs.com/package/vue-stylelint-standard)
[![Alt](https://img.shields.io/npm/dt/vue-stylelint-standard?style=flat-square)](https://npmcharts.com/compare/vue-stylelint-standard?minimal=true)
![Alt](https://img.shields.io/github/license/mivui/vue-stylelint-standard?style=flat-square)


### install

```shell
npm i vue-stylelint-standard -D
```

### stylelint.config.js

```js
import vueStylelint from 'vue-stylelint-standard';

export default vueStylelint;

```

### .prettierrc.js

```js
/**
 * @type {import("prettier").Config}
 */
export default {
  singleQuote: true,
  trailingComma: 'all',
  bracketSameLine: true,
  endOfLine: 'auto',
};

```