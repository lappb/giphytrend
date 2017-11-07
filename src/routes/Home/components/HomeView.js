import React, { PropTypes, Component } from 'react'
import { Columns, Column, Box, Avatar, Link, Sack } from 'react-zet-com'
// import Masonry from 'react-masonry-infinite'
import Masonry from 'react-masonry-component'
import InfiniteScroll from 'react-infinite-scroller'
import './HomeView.scss'
import GifItem from '../../../components/GifItem'

class HomeView extends Component {
  static propTypes = {
  }

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.getGifTrend(1)
  }

  loadMore = (pageToLoad) => {
    let offset = 0
    if (pageToLoad !== 0) {
      offset = pageToLoad * 20 - 1
    }
    this.props.getGifTrend(offset)
  }

  render () {
    const { gifs, offset } = this.props
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMore}
        hasMore
        loader={<div className='sk-folding-cube'>
          <div className='sk-cube1 sk-cube' />
          <div className='sk-cube2 sk-cube' />
          <div className='sk-cube4 sk-cube' />
          <div className='sk-cube3 sk-cube' />
        </div>}
>

        <Masonry style={{}}>
          {gifs && gifs.map((item, index) =>
            <Sack className='masonry_item' zcss={['mgB1e', 'ta_c']}>
              <GifItem {...item} />
              <Sack zcss={['ta_l']}>
                <Avatar width={16}
                  src={item.user ? item.user.avatar_url : 'http://zetgoo.com/images/glogo.png'}
                  zcss={['isCircle']}
              />
                <Link href={item.user ? item.user.profile_url : 'http://zetgoo.com'}>
                  {item.user ? item.user.display_name : 'no name'}
                </Link>
              </Sack>
            </Sack>
        )}
        </Masonry>
      </InfiniteScroll>

    )
  }
}

export default HomeView
