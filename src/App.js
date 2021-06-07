import React from 'react';
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <button type="button" className="btn btn-primary">Primary</button>
        <h1>My name is charles, follow my links below</h1>
        <p> <FaGithub/> Facebook</p>
        <p> <FaTwitter/> Twitter</p>
        <p> <FaLinkedin/> LinkedIn</p>
      </div>
    )
  }
}