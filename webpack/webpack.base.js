const path = require('path');

const resolve = function(dir) {
  return path.resolve(__dirname, '..', dir);
};

module.exports = {
  entry: [
    '@babel/polyfill',
    resolve('src/modules/infra/index.jsx'),
  ],
  resolve: {
    alias: {
      '#': resolve('src/'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.(s?)css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
    publicPath: '/',
    clean: true,
  },
};
