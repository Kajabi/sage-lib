var path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: [
      './lib/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  resolve: { extensions: ['.js',] }
}
