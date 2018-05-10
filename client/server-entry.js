import React from 'react'
import {Provider} from 'react-redux'
import {StaticRouter} from 'react-router-dom'

import App from './views/App'
import configureStore from './store/store'

const store = configureStore()
export {store}

export default (store, routerContext, sheetsRegistry, jss, theme, url) => (
  <Provider store={store}>
    <StaticRouter context={routerContext} location={url}>
      <App/>
    </StaticRouter>
  </Provider>
)
