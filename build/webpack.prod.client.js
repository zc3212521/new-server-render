const testClientConfig = require('./webpack.test.client')

const config = testClientConfig.plugins.push(new webpack.DefinePlugin({
  'process.env.baseUrl':JSON.stringify("prod")
}))
module.export = config
