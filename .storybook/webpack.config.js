/* @flow */

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.jpeg'],
    enforceExtension: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpeg$/,
        loaders: 'url-loader'
      }
    ]
  }
}
