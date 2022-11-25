const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");


module.exports = merge(common, {
  mode: 'production',
  optimization: {
    mangleExports: true,
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true
        },
      }
    })],
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});