// webpack.config.js
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    system: [
      './assets/javascript/system/index.js',
      './assets/stylesheets/system/index.scss'
    ],
    react: [
      './assets/javascript/react-components/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css'
  })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'assets/javascript'),
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
        include: [
          path.resolve(__dirname, 'assets/stylesheets'),
          path.resolve(__dirname, 'assets/fonts')
        ]
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
        loader: 'url-loader?limit=100000&name=./images/[name].[ext]',
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
