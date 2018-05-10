/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
// import {Provider} from 'mobx-react'
import {AppContainer} from 'react-hot-loader' // eslint-disable-line

import App from './views/App'
// import AppState from './store/app-state'

//-----------------------

import {Provider} from 'react-redux'
import configureStore  from './redux/store'
const initialState = window.__INITIAL__STATE__ || {} // eslint-disable-line
const store = configureStore(initialState, 'client')

//--------------------------
// const createApp = (TheApp) => {
//   class Main extends React.Component {
//     // Remove the server-side injected CSS.
//     componentDidMount() {
//       const jssStyles = document.getElementById('jss-server-side');
//       if (jssStyles && jssStyles.parentNode) {
//         jssStyles.parentNode.removeChild(jssStyles);
//       }
//     }
//
//     render() {
//       return <TheApp/>
//     }
//   }
//
//   return Main
// }

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
    // ReactDOM.hydrate(<NextApp />, document.getElementById('root'))
    render(NextApp)
  })
}
