module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    // 'prettier'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
    // 'prettier'
    ],
    rules: {
        'linebreak-style': ['off'],
        'object-curly-newline': ['off'],
        'react/jsx-indent': ['off'],
        'react/jsx-indent-props': ['off'],
        indent: ['warn', 4],
        'no-else-return': ['error', { allowElseIf: true }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-one-expression-per-line': ['off'],
        'react/no-array-index-key': ['off'],
        'no-console': ['off'],
        'no-unused-vars': 'warn',
    },
};
