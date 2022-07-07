module.exports = {
  extends: [
    "./index",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // base
    "no-console": ["error", { allow: ["warn", "error"] }],
    "max-lines": ["error", { max: 490, skipComments: true }],
    "space-before-function-paren": "off",
    "arrow-parens": ["error", "always"],
    "no-throw-literal": "off",

    // React
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/self-closing-comp": "error",
    "react/jsx-wrap-multilines": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-tag-spacing": "error",
    "react/prop-types": "off",
    "react/jsx-sort-props": "error",
    "react/jsx-boolean-value": "error",
    "react/no-array-index-key": "error",
    "react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
    "react/jsx-curly-brace-presence": "error",
    "react/destructuring-assignment": "error",
    "react/no-deprecated": "error",

    // typescript
    "@typescript-eslint/no-throw-literal": ["error"],
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
  },
};
