import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import 'normalize.css'
import './CoreLayout.scss'
import {
  AppContainer,
  Columns,
  Column,
  Menu,
  MenuGroup,
  MenuItem,
  MenuLabel,
  Container,
  Sack,
  Link,
  Icon
} from 'react-zet-com'

class CoreLayout extends Component {
  constructor (props) {
    super(props)
    this.state = { notifications: [] }
  }
  componentDidMount () {
  }

  componentWillUnmount () {
  }

  handleScroll () {

  }

  render () {
    return (
      <AppContainer>
        <div className='wrapper'>
          <Sack style={{ borderBottom: '1px solid rgb(241,241,241)' }}>
            <Container>
              <Header toggleActive={false} notifications={this.state.notifications} />
            </Container>
          </Sack>
          <div className='main'>
            <Sack zcss={['pdT1e']}>
              <Container zcss={['pd1e']} style={{ backgroundColor: 'rgb(246, 249, 250)' }} >
                <Columns xLargeCol={12} largeCol={12} smallCol={1} gutter='8px'>
                  <Column zcss={['']} xLargeCell={3} largeCell={3} smallCell={1}>
                    <Menu zcss={['fw400']}>
                      <MenuGroup>
                        <MenuLabel>FRAMEWORK</MenuLabel>
                        <MenuItem zcss={['']}>
                          <li>
                            <Link style={{ color: 'rgba(0,0,0,.86)' }} href='https://github.com/facebook/react'>
                              <Icon
                                zcss={['f1e']}
                                icon='fa fa-ravelry'
                                text='React'
                              />
                            </Link>

                          </li>
                        </MenuItem>

                        <MenuItem>
                          <li>
                            <Link
                              style={{ color: 'rgba(0,0,0,.86)' }}
                              href='https://github.com/reactjs/redux'
                            >
                              <Icon
                                zcss={['f1e']}
                                icon='fa fa-ravelry'
                                text='Redux'
                              />
                            </Link>

                          </li>
                        </MenuItem>
                      </MenuGroup>
                      <MenuGroup>
                        <MenuLabel>COMPONENT</MenuLabel>
                        <MenuItem>
                          <li>
                            <Link
                              style={{ color: 'rgba(0,0,0,.86)' }}
                              href='https://github.com/zetgoo/react-zet-com'
                            >
                              <Icon
                                zcss={['f1e']}
                                icon='fa fa-ravelry'
                                text='React ZetGoo component'
                              />
                            </Link>

                          </li>
                        </MenuItem>
                        <MenuItem>
                          <li>
                            <Link
                              style={{ color: 'rgba(0,0,0,.86)' }}
                              href='https://github.com/CassetteRocks/react-infinite-scroller'
                            >
                              <Icon
                                zcss={['f1e']}
                                icon='fa fa-ravelry'
                                text='React infinite scroller'
                              />
                            </Link>

                          </li>
                        </MenuItem>
                        <MenuItem>
                          <li>
                            <Link
                              style={{ color: 'rgba(0,0,0,.86)' }}
                              href='https://github.com/eiriklv/react-masonry-component'
                            >
                              <Icon
                                zcss={['f1e']}
                                icon='fa fa-ravelry'
                                text='React masonry component'
                              />
                            </Link>

                          </li>
                        </MenuItem>
                      </MenuGroup>
                    </Menu>
                  </Column>
                  <Column zcss={['']} xLargeCell={9} largeCell={9} smallCell={1} >
                    {this.props.children}
                  </Column>
                </Columns>
              </Container>
            </Sack>
          </div>
        </div>
      </AppContainer>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  layout: state.layout ? state.layout.header : {}
})

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
