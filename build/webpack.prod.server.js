const webpackMerge = require('webpack-merge')
const testServerConfig = require('./webpack.test.server')
const webpack = require('webpack')

module.exports = webpackMerge(testServerConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'PRODUCTION':JSON.stringify("prod")
    }),
  ],
})

