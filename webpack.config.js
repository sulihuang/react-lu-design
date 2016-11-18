// This config is for building dist files
const webpack = require('webpack');
const getWebpackConfig = require('antd-tools/lib/getWebpackConfig');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// noParse still leave `require('./locale' + name)` in dist files
// ignore is better
// http://stackoverflow.com/q/25384360
function ignoreMomentLocale(webpackConfig) {
  delete webpackConfig.module.noParse;
  webpackConfig.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
}

// Fix ie8 compatibility
function es3ify(webpackConfig) {
  webpackConfig.module.loaders.unshift({
    test: /\.(tsx|jsx?)$/,
    loader: 'es3ify-loader',
  });
}

// Support SCSS Modules
function sass(webpackConfig) {
  webpackConfig.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader',
      'css?&sourceMap!' +
      'sass?outputStyle=expanded&sourceMap'),
  });
}

module.exports = function (webpackConfig) {
  webpackConfig = getWebpackConfig(webpackConfig);
  if (process.env.RUN_ENV === 'PRODUCTION') {
    webpackConfig.forEach((config) => {
      es3ify(config);
      ignoreMomentLocale(config);
    });
  }
  webpackConfig.forEach((config) => {
    sass(config);
  });

  return webpackConfig;
};
