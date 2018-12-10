module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    enforceExtension: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
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
