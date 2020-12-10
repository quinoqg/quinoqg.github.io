import React, { Component } from 'react'
import coffee from '../images/coffee.svg'
import tania from '../../content/images/GustavoFooter.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <p>
              I'm Gustavo, researcher, engineer and musician. I really hope my articles are helpful. Please consider supporting what I do.
            </p>

            <a href="https://ko-fi.com/quinoqg" className="donate-button" target="_blank">
              Buy me a coffee 
              {' '}
            <img src={coffee} className="coffee-icon" />
            </a>
            <a
              className="patreon-button"
              href="https://www.patreon.com/quinoqg"
              target="_blank"
            >
              Patreon
            </a>
          </div>
          <div className="flex-avatar">
            <img className="avatar" src={tania} />
          </div>
        </div>
      </aside>
    )
  }
}
