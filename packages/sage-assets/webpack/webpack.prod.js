var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: ["./lib/stylesheets/index.scss"],
  },
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.?(s)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true,
              sourceMapContents: false,
            },
          },
          "css-loader",
          "resolve-url-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: "url-loader",
        options: {
          limit: 0,
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: "url-loader",
        options: {
          limit: Infinity,
        },
      },
    ],
  },
  resolve: {
    extensions: [
      ".css",
      ".scss",
      ".sass",
      ".woff",
      ".woff2",
      ".ttf",
      ".otf",
      ".svg",
      ".png",
      ".jpeg",
      ".jpg",
      ".gif",
    ],
  },
};
