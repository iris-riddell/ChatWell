import React from 'react'
import { Link } from 'react-router-dom'

import { logOff } from 'authenticare/client'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import HeaderTag from './elements/HeaderTag'

class Nav extends React.Component {
  render () {
    return (
      <div>
        <HeaderTag style={{ color: '#090934', padding: '0px' }}>ChatWell</HeaderTag>
        <link href="https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao&display=swap" rel="stylesheet"></link>
        <div className="w3-top">
          <div className="w3-bar" id="myNavbar">
            <IfAuthenticated>
              <Link to='/' data-testid='logoff' style={{ color: '#090934', fontWeight: 'bold' }} className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-green"
                onClick={logOff}>LOG OFF</Link>
            </IfAuthenticated>
            <IfNotAuthenticated>
              <Link to='/sponsor/register' style={{ color: '#090934', fontWeight: 'bold' }} className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-green" data-testid='register'>REGISTER</Link>
              <Link to='/sponsor/signin' style={{ color: '#090934', fontWeight: 'bold' }} className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-green" data-testid='signin'>SIGN IN</Link>
            </IfNotAuthenticated>
            <a href="/" style={{ color: '#090934', fontWeight: 'bold' }} className="w3-bar-item w3-button w3-hover-green">HOME</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
