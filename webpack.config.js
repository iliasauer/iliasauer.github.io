const path = require('path');

module.exports = [
  {
    entry: {
      homework1: ['./lib/homework1.js'],
      homework2: ['./lib/homework1.js'],
      project: ['./lib/project.js'],
    },
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
      ],
    },
  },
];
