// .prettierrc.cjs
module.exports = {
  printWidth: 80,       // 一行最多 80 字符
  tabWidth: 2,          // 使用 2 个空格缩进
  useTabs: false,         // 不使用 tab 缩进，而使用空格
  semi: false,            // 行尾不需要分号
  singleQuote: true,      // 使用单引号
  trailingComma: 'es5',   // 在 ES5 中有效的结尾逗号（对象、数组等）
  bracketSpacing: true,   // 对象大括号内两边需要空格 { foo: bar }
  jsxSingleQuote: false,  // 在 JSX 中使用双引号
  arrowParens: 'always',  // 箭头函数，只有一个参数的时候，也需要括号
}