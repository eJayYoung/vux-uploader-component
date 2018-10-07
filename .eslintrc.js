module.exports = {
  extends: ["eslint:recommended", "plugin:vue/essential"],
  env: {
    browser: true,
    amd: true,
    node: true,
    mocha: true,
  },
  plugins: ["html"],
  rules: {
    "no-console": 0,
    "no-extra-boolean-cast": 0,
  }
};
