import React from 'react'
import { Sack, Image, Modal, Icon, ControlLabel } from 'react-zet-com'
import './GifItem.scss'

export const ProfileMenu = (props) => (
  <Modal
    alignAction='center'
    action={[
    ]}
    zFront={
      <Sack zcss={['ps_r', 'pdB2e', 'mgB.5e', 'bg_no']}>
        <Image
          zcss={[]}
          src={props.images.preview_gif ? props.images.preview_gif.url : 'http://zetgoo.com/images/glogo.png'}
          alt='Zetgoo'
          title='Zetgoo'
        />
        <Sack zcss={['ps_a', 'ta_r']} style={{ bottom:0, right: '0' }}>
          <Icon zcss={['mgR.5e']} icon='fa fa-heart' text='7062' />
          <Icon zcss={['mgR.5e']} icon='fa fa-heart' text='14' />
          <Icon zcss={['mgR.5e']} icon='fa fa-heart' text='40' />
        </Sack>
      </Sack>}
    title={<ControlLabel zcss={['f1.5e']}>{props.title}</ControlLabel>}
  >
    <Sack zcss={['ta_c']} style={{ maxHeigh: '100%' }}>
      <Image
        zcss={['wd_f']}
        src={props.images.original.url}
        alt='Zetgoo'
        title='Zetgoo'
  />
    </Sack>
  </Modal>
)

export default ProfileMenu
