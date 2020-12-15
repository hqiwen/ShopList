module.exports = {
  presets: ["@babel/typescript"],
  plugins: [
    "@babel/plugin-proposal-nullish-coalescing-operator", //支持??
    "@babel/plugin-proposal-optional-chaining", //支持?.
  ],
};
