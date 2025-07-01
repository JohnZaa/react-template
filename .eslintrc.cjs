// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended' // 新增，集成 prettier
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'], // 新增 prettier 插件
  rules: {
    'prettier/prettier': 'warn', // 对于 Prettier 的规则，不符合的给出警告
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off', // React 17+ 不需要手动导入 React
    '@typescript-eslint/no-explicit-any': 'warn', // 允许 any，但给出警告
  },
  settings: {
    react: {
      version: 'detect' // 自动检测 React 版本
    }
  }
}