const path = require("path");

module.exports = {
  stories: ["../stories/index.jsx"],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
};
