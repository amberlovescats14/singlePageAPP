import React, { Component } from 'react'
import auth from '../auth'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <button onClick={
          () => {
            auth.login(() => {
              this.props.history.push('/app')
            })
          }
        }></button>
      </div>
    )
  }
}
