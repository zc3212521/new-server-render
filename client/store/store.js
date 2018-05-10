import AppStateClass from './app-state'

export const AppState = AppStateClass

export default {
  AppState,
}

console.log(565656, new AppState())

export const createStoreMap = () => {
  return {
    appState: new AppState(),
  }
}
