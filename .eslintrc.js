module.exports = {
  extends: ["eslint:recommended", "plugin:vue/essential"],
  env: {
    browser: true,
    amd: true,
    node: true
  },
  plugins: ["html"],
  rules: {
    "no-console": 0
  }
};
