export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        module: "writable",
        require: "readonly",
        global: "readonly",
        URL: "readonly"
      }
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "double", { "allowTemplateLiterals": true }],
      "indent": ["error", 2],
      "comma-dangle": ["error", "never"],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"]
    }
  },
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "docs/**",
      "scripts/**",
      ".husky/**"
    ]
  }
];
