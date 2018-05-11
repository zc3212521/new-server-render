const ejs = require('ejs')
const asyncBootstrap = require('react-async-bootstrapper').default
const ReactDomServer = require('react-dom/server')
const Helmet = require('react-helmet').default

const SheetsRegistry = require('react-jss').SheetsRegistry
const create = require('jss').create
const preset = require('jss-preset-default').default

module.exports = (bundle, template, req, res) => {
  return new Promise((resolve, reject) => {
    // const createStoreMap = bundle.createStoreMap
    const store = bundle.store
    const createApp = bundle.default

    const routerContext = {}
    const sheetsRegistry = new SheetsRegistry()
    const jss = create(preset())
    const app = createApp(store, routerContext, sheetsRegistry, jss, req.url)

    asyncBootstrap(app).then(() => {
      if (routerContext.url) {
          res.status(302).setHeader('Location', routerContext.url)
          res.end()
        return
      }
      const helmet = Helmet.rewind()
      const content = ReactDomServer.renderToString(app)

      const html = ejs.render(template, {
        appString: content,
        initialState: JSON.stringify(store.getState()),
        meta: helmet.meta.toString(),
        title: helmet.title.toString(),
        style: helmet.style.toString(),
        link: helmet.link.toString(),
        materialCss: sheetsRegistry.toString()
      })
      res.send(html)
      resolve()
    }).catch(reject)
  })
}
