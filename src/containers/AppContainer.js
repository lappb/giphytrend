import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { addLocaleData, IntlProvider } from 'react-intl'
import vi from 'react-intl/locale-data/vi'
import en from 'react-intl/locale-data/en'

addLocaleData([...en, ...vi])
class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired,
    locale  : PropTypes.string.isRequired
  }

  shouldComponentUpdate () {
    return true
  }

  render () {
    const { routes, store, locale } = this.props
    const messages = {
      'header.banner.desc': locale == 'en' ? '' : 'aaaaaaaa'
    }
    console.log()
    return (
      <Provider store={store}>
        <IntlProvider locale={locale} messages={messages}>
          <div>
            <Router history={browserHistory} children={routes} />
          </div>
        </IntlProvider>
      </Provider>
    )
  }
}

const mapState = (state) => ({
  locale: state.locale,
  messages: state.messages
})

export default connect(mapState)(AppContainer)
