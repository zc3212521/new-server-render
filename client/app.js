import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import {AppContainer} from 'react-hot-loader'

import App from './views/App'
import configureStore  from './store/store'

const initialState = window.__INITIAL__STATE__ || {}
const store = configureStore(initialState, 'client')

const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component/>
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
