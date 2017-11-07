import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import locationReducer from './location'
import intlReducer from './intl'
import runtimeReducer from './runtime'
import authentication from './authentication'
import LayoutReducer from './layout'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
  	form: formReducer,
    location: locationReducer,
    runtime: runtimeReducer,
    locale: intlReducer,
    layout: LayoutReducer,
    user: authentication,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
