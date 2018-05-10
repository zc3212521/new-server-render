import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

export default function configureStore(initialState, ifClient) {
  if(ifClient === 'client'){
    const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : () => {}
    return createStore(reducer, initialState, compose(applyMiddleware(thunk), reduxDevTools));
  } else {
    return createStore(reducer, compose(applyMiddleware(thunk)));
  }
}
