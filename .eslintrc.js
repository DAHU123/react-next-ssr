module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [ 'react','@typescript-eslint' ],
  rules: {
    "no-param-reassign": 0,
    "default-case": 0,
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': [ 2, { ignore: [ '^@/', '^umi/' ] } ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    "array-bracket-spacing": [ "error","always" ],
    "semi": [ 1,"never" ],
    "object-curly-spacing": [ "error","always" ],
    // 禁止使用 var
    'no-var': "error",
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': [
      "error",
      "interface"
    ],
    'import/no-extraneous-dependencies': [ 2, {
      devDependencies: true,
      peerDependencies: true,
      // optionalDependencies: true,
      // bundledDependencies: true
    } ]

  }
}
