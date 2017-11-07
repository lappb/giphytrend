
import { connect } from 'react-redux'
import { getGifTrend } from '../modules/home'

import HomeView from '../components/HomeView'

const mapDispatchToProps = {
  getGifTrend
}

const mapStateToProps = (state) => ({
  gifs: state.home.gifs,
  offset: state.home.offset

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
