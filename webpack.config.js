const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: {
      app: './lib/main.js',
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/assets/',
    },
    devtool: 'inline-source-map',
    plugins: [
      new CleanWebpackPlugin(['build']),
      new ExtractTextPlugin({
        filename: 'style.css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: [/(node_modules|bower_components)/],
          loader: 'babel-loader',
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
              },
            ],
          }),
        },
        {
          test: /\.ttf$/,
          loader: 'file?name=font/[name].[ext]',
        },
      ],
    },
  },
];
