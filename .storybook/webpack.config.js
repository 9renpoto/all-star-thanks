const path = require("path");

module.exports = async ({ config }) => {
  config.module.rules.concat(
    ...[
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jpeg$/,
        loaders: "url-loader"
      }
    ]
  );

  // Return the altered config
  return config;
};
