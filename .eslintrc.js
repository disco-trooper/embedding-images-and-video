module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb-base", "prettier", "eslint:recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ["prettier"],
  rules: {
  },
};
