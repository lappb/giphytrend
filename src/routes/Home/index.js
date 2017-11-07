import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : '',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const home = require('./containers/HomeContainer').default
      const reducer = require('./modules/home').default

      injectReducer(store, { key: 'home', reducer })

      cb(null, home)
    }, 'home')
  }
})
