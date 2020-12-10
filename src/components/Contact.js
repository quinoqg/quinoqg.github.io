import React, { Component } from 'react'
import NewsletterForm from './NewsletterForm'

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>Stay in touch</h1>
        <p>Like the posts you see here? Sign up to get notified about new content.</p>
        <NewsletterForm />
	<p></p>        
	<p>You can find me around the web:</p>
        <ul>
          <li>
            <strong>Email</strong>: <a href="mailto:me@gquino.com">me@gquino.com</a>
          </li>
          <li>
            <strong>Twitter</strong>:{' '}
            <a target="_blank" href="https://twitter.com/quinoqg">
              quinoqg
            </a>
          </li>
          <li>
            <strong>LinkedIn</strong>:{' '}
            <a target="_blank" href="https://linkedin.com/in/gustavoquino">
              gustavoquino
            </a>
          </li>
        </ul>
      </>
    )
  }
}
