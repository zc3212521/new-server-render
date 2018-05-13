import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { HelmetProvider } from 'react-helmet-async'

import App from './views/App'
import configureStore  from './store/store'

const initialState = window.__INITIAL__STATE__ || {}

window.__SERVER__PATH__ = initialState.path // 取出当前服务端渲染的path路径，判断二次渲染用
delete initialState.path // 删掉，因为redux store中没有此属性

const store = configureStore(initialState, 'client')

const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <HelmetProvider>
            <Component/>
          </HelmetProvider>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default // eslint-disable-line
    render(NextApp)
  })
}
