const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const devServerConfig = require('./webpack.dev.server')

module.exports = webpackMerge(devServerConfig, {
  mode: 'production',
})
