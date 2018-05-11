const webpackMerge = require('webpack-merge')
const HTMLPlugin = require('html-webpack-plugin')
const path = require('path')
const testClientConfig = require('./webpack.test.client')
const webpack = require('webpack')

module.exports = webpackMerge(testClientConfig, {
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    }),
    new HTMLPlugin({
      template: '!!ejs-compiled-loader!' + path.join(__dirname, '../client/server.template.ejs'),
      filename: 'server.ejs'
    }),
    new webpack.DefinePlugin({
      'PRODUCTION':JSON.stringify("prod")
    }),
  ],
})
