const webpackMerge = require('webpack-merge')
const devServerConfig = require('./webpack.dev.server')

module.exports = webpackMerge(devServerConfig, {
  mode: 'production',
})
