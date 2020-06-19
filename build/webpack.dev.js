const merge = require('webpack-merge');
const common = require('./webpack.common');

const HtmlPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlPlugin({
      template: 'src/index.html',
    }),
  ]
});
