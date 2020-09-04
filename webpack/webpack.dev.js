const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { prod_path, src_path, public_path } = require('./path');

module.exports = {
  entry: {
    main: './' + src_path + '/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js','.scss'],
  },
  output: {
    path: path.resolve(__dirname, prod_path),
    filename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ['awesome-typescript-loader?module=es6'],
        exclude: [/node_modules/],
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
      {
        test: /\.s(a|c)ss$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              // data: '@import "../src/styles/main.scss";',
              // includePaths: ['./' + src_path],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              // Provide path to the file with resources
              resources: ['./' + src_path + '/styles/variables/*.scss','./' + src_path + '/styles/theme-filter.scss','./' + src_path + '/styles/*.scss']
            },
          },
        ],
      },
      // {
      //   test: /\.s(a|c)ss$/,
      //   exclude: /\.module.(s(a|c)ss)$/,
      //   loader: [
      //     'style-loader',
      //     'css-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         includePaths: ['./' + src_path],
      //         sourceMap: true,
      //       },
      //     },
      //     {
      //       loader: 'sass-resources-loader',
      //       options: {
      //         // Provide path to the file with resources
      //         resources: ['./' + src_path + '/styles/main.scss'],
      //       },
      //     },
      //   ],
      // }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: './' + public_path + '/index.html',
      filename: 'index.html',
    }),
  ],
};
