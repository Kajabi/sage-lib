var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
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
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css'
  })],
  externals: {
    react: "react",
    reactDOM: "react-dom",
    reactRouterDom: "react-router-dom",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.?(s)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true,
              sourceMapContents: false
            },
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
        options: {
          limit: Infinity
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: Infinity
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.scss',
      '.sass',
      '.woff',
      '.woff2',
      '.ttf',
      '.otf',
      '.svg',
      '.png',
      '.jpeg',
      '.jpg',
      '.gif'
    ]
  }
}
