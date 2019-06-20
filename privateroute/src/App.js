import React, { Component } from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import LandingPage from './component/LandingPage'
import User from './component/User'


export default class App extends Component {
  state = {
    loggedIn: false
  }
  loginHandle = () => {
    this.setState({ loggedIn: !this.state.loggedIn  });
  }
  render() {


  return (
    <div className="App">
      <ul>
        <li>
      <NavLink exact to="/" activeStyle={{color:'green'}} >HOME</NavLink>
        </li>
        <li>
      <NavLink to="/user/Amber" activeStyle={{color:'green'}} >User Amber</NavLink>
        </li>
        <li>
      <NavLink to="/user/Austin" activeStyle={{color:'green'}} >User Austin</NavLink>
        </li>
      </ul>
      <Route exact strict path='/landingPage'/>
      <Route exact strict path='/user/:username' render={({match})=>{
       return this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to='/'/>)
      }}/>
      <input type="button" value={this.state.loggedIn}
      onClick={this.loginHandle}
      />

    </div>
   
    )
  }
}
