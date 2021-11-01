module.exports = {
  plugins: ['react', 'prettier'],
  extends: ['react-app', 'airbnb', 'airbnb/hooks', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src']
      }
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': 'off',
    'react/destructuring-assignment': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    camelcase: 'off',
    'consistent-return': 'off'
  }
};
