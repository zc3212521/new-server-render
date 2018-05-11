const testServerConfig = require('./webpack.test.server')

const config = testServerConfig.plugins.push(new webpack.DefinePlugin({
  'process.env.baseUrl':JSON.stringify("prod")
}))
module.export = config
