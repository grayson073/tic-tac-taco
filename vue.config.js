const CopyWebpackPlugin = require('copy-webpack-plugin');
/* eslint-env node */
module.exports = {
  baseUrl: '/',
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.js',
      template: './public/index.html',
      filename: 'index.html',
    },
  },
  configureWebpack: {
    performance: {
      maxAssetSize: 500000,
    },
    plugins: [
      new CopyWebpackPlugin([{ from: './public/', to: 'public' }])
    ],
  }
};