import React from 'react'
import {
  Sack,
  Button,
  Link,
  ControlLabel,
  Icon,
  Header as ZHeader
} from 'react-zet-com'

export const Header = (props) => {
  return (
    <ZHeader
      zcss={['']}
      userLogined={{
        userName: 'Ballard',
        avatar:
          'https://avatars1.githubusercontent.com/u/6657580?v=4&s=80'
      }}
      isSearching={props.isSearching}
      search={() => {
        console.log('zetgoo')
      }}
      zBackUser={
        <Sack zcss={['mg1e', 'ta_l']} style={{ width: 220 }}>
          <ControlLabel zcss={['f1e']}>Ballard</ControlLabel>
          <Link to='/profile'>
            <Icon zcss={['']} icon='fa fa-user' text='Setting' />
          </Link>
          <Sack>
            <Button
              zcss={['danger']}
              onClick={() => console.log('logout')}
            >
              Logout
            </Button>
          </Sack>
        </Sack>
      }
      menu={[
        {
          icon: 'fa fa-home',
          text: 'Create Project',
          to: '/project/create',
          zcss: ['']
        },
        {
          icon: 'fa fa-user-circle',
          text: 'Document',
          to: '/document',
          zcss: ['']
        }
      ]}
      menuNoneUser={[
        {
          icon: 'fa fa-home',
          text: 'Register',
          to: '/register',
          zcss: ['cl_success']
        },
        {
          icon: 'fa fa-user-circle',
          text: 'Login',
          to: '/login',
          zcss: ['cl_success']
        }
      ]}
      iconMenuUser={[
        // {
        //   type: 'link',
        //   icon: 'fa fa-plus',
        //   text: 'Create Project',
        //   link: '/project/create',
        //   zcss: ['f.8125r'],
        // },
        {
          type: 'action',
          icon: 'fa fa-plus',
          text: '',
          onClick: () => console.log('Zetgoo'),
          zcss: ['f.8125r']
        },
        {
          type: 'popover',
          icon: 'fa fa-bell',
          info: (
            <Sack
              zcss={['ps_a', 'bg_success', 'cl_no', 'f.5e']}
              style={{ top: 18, left: 5, padding: '0 1px' }}
            >
              777
            </Sack>
          ),
          text: '',
          zcss: ['f.8125r'],
          zBack: (
            <Sack zcss={['mg1e', 'ta_l']} style={{ width: 220 }}>
              <Sack zcss={['dp_ib']}>
                <ControlLabel zcss={['f1e', 'dp_ib']}>
                  Notifications
                </ControlLabel>
                <Button zcss={['isLink', 'dp_ib', 'fr']}>
                  Mark all as read
                </Button>
              </Sack>
              <Sack>
                {props.notifications.map(item =>
                  <Link to={item.link} zcss={['dp_b']}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </Link>,
                )}
              </Sack>
              <Sack>
                <Link to='/notifications'>
                  <Button zcss={['isLink']}>see all</Button>
                </Link>
              </Sack>
            </Sack>
          )
        }
      ]}
    />
  )
}

export default Header
