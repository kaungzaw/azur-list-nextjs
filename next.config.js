const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  modifyVars: { "@primary-color": "#3417af" },
  lessVarsFilePath: "./src/styles/variables.less",
  lessVarsFilePathAppendToEndOfContent: false,

  reactStrictMode: true,

  webpack(config) {
    return config;
  },
});
