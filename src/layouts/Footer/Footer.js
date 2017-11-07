import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Footer.scss'

export const Footer = (props) => (
  <footer className='footer text-center'>

    <div className='container'>

      <section className='socil-icons'>

        <a href='https://twitter.com/Zetgoo1'><i className='fa fa-twitter' aria-hidden='true' /></a>

        <a href='https://www.facebook.com/zetgo0'><i className='fa fa-facebook' aria-hidden='true' /></a>

        <a href='https://www.linkedin.com/in/zet-goo-787511139?trk=nav_responsive_tab_profile'>
          <i className='fa fa-linkedin' aria-hidden='true' />
        </a>

        <a href='https://plus.google.com/u/0/108481921083651717425'>
          <i className='fa fa-google-plus' aria-hidden='true' />
        </a>

        <a href='https://www.youtube.com/channel/UC5qSL8hX9R9UgMeClk8HfUQ'>
          <i className='fa fa-youtube' aria-hidden='true' />
        </a>

      </section>

      <nav role='footer-nav' />

      <p className='copy'>
        © 2015
        <a href='http://zetgoo.com/'> Zetgoo</a>
        . All rights reserved. Made by Zetgoo team
      </p>

    </div>

  </footer>
)

export default Footer
