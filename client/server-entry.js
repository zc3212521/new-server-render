/* eslint-disable */
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
// import { Provider, useStaticRendering } from 'mobx-react'

// import { JssProvider } from 'react-jss'
// import { MuiThemeProvider } from 'material-ui/styles'

import App from './views/App'
// import { createStoreMap } from './store/store'

// 让mobx在服务端渲染的时候不会重复数据变换

// useStaticRendering(true)

//---------

import {Provider} from 'react-redux'
import configureStore  from './store/store'
const store = configureStore()
export { store }
//---------

export default (store, routerContext, sheetsRegistry, jss, url, helmetContext) => (
  <Provider store={store}>
    <StaticRouter context={routerContext} location={url}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </StaticRouter>
  </Provider>
)

// export { createStoreMap }
