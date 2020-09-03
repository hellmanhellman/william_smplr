const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const {
  prod_path,
  src_path,
  public_path
} = require('./path');
const { selectedPreprocessor } = require("./loader");

module.exports = {
  entry: {
    main: "./" + src_path + "/index.tsx"
  },
  resolve: {
    extensions: ['.ts','.tsx', '.js', '.html']
  },
  output: {
    path: path.resolve(__dirname, prod_path),
    filename: "[name].[chunkhash].js"
  },
  //devtool: 'source-map',
  module: {
    rules: [
      {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: selectedPreprocessor.fileRegexp,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: selectedPreprocessor.loaderName
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, prod_path), {
      root: process.cwd()
    }),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './' + public_path + '/index.html',
      filename: "index.html"
    }),
    new WebpackMd5Hash()
  ]
};
