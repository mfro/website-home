const merge = require('webpack-merge');
const common = require('./webpack.common');

const HtmlPlugin = require('html-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const ScriptExtHtmlPlugin = require('script-ext-html-webpack-plugin');
const StyleExtHtmlPlugin = require('style-ext-html-webpack-plugin-webpack-4');

const {
  HashedModuleIdsPlugin
} = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    noEmitOnErrors: true,
  },
  plugins: [
    new HashedModuleIdsPlugin({
      hashDigest: 'hex'
    }),
    new HtmlPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true,
        removeScriptTypeAttributes: true
      },
    }),
    new OptimizeCssPlugin(),
    new ScriptExtHtmlPlugin({
      defaultAttribute: 'async',
    }),
    new StyleExtHtmlPlugin({

    }),
    // new HtmlInlineCssPlugin(),
  ]
});
