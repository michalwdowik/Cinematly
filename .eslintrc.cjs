module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    ignorePatterns: [
        '*.html',
        'registerSW.js',
        'dist/sw.js',
        'workbox-743a3d69.js',
        'index-5f3a74c1.js',
        'dist/assets/index-0a31b44f.js',
        'workbox-cbd5c79e.js',
        '/dev-dist/sw.js',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: 'tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'prefer-arrow', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 0,
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/require-default-props': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                disallowPrototype: true,
                singleReturnOnly: true,
                classPropertiesAllowed: false,
            },
        ],
        'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
        'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    },
}
