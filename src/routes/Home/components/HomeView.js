import React, { PropTypes, Component } from 'react'
import { Columns, Column, Box } from 'react-zet-com'
import MasonryInfiniteScroller from 'react-masonry-infinite'
import './HomeView.scss'
import GifItem from '../../../components/GifItem'

class HomeView extends Component {
  static propTypes = {
  }

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // this.props.getGifTrend(1)
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
      <MasonryInfiniteScroller className='masonry' hasMore loadMore={this.loadMore} pageStart={0}>

        <Columns zcss={['ta_c']} xLargeCol={12} largeCol={6} mediumCol={6} smallCol={2} gutter='10px'>
          {gifs && gifs.map(item =>
            <Column zcss={['']} xLargeCell={3} largeCell={2} mediumCell={2} smallCell={1}>
              <GifItem {...item} />
            </Column>
        )}
        </Columns>
      </MasonryInfiniteScroller>
    )
  }
}

export default HomeView
