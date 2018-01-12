const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [
  {
    entry: {
      default: ['./lib/default.js'],
      homework1: ['./lib/homework1.js'],
      homework2BarChart: ['./lib/homework2BarChart.js'],
      homework2Table: ['./lib/homework2Table.js'],
      project: ['./lib/project.js'],
    },
    plugins: [
      new CleanWebpackPlugin(['build']),
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      publicPath: '/assets/',
    },
    devtool: 'inline-source-map',
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
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
        {
          test: /\.ttf$/,
          loader: 'url-loader?limit=100000',
        },
      ],
    },
  },
];
