import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import styled from 'styled-components'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import { HeaderTag } from './Styled'

const Navbar = styled.div`
  position: fixed;
  margin-top: 20px;
  margin-left: 20px;
`

const NavLink = styled(Link)`
  color: #090934;
  font-family: 'Lato';
  font-weight: bold;
  text-decoration: none;
  padding: 20px;
  &:hover {
    background: #a3cfae;
  }
`

class Nav extends React.Component {
  render () {
    return (
      <>
        <link href="https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao&display=swap" rel="stylesheet"></link>
        <Navbar>
          <NavLink to="/">HOME</NavLink>
          <IfAuthenticated>
            <NavLink to='/' data-testid='logoff'
              onClick={logOff}>LOG OFF</NavLink>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <NavLink to='/sponsor/register' data-testid='register'>REGISTER</NavLink>
            <NavLink to='/sponsor/signin' data-testid='signin'>SIGN IN</NavLink>
          </IfNotAuthenticated>
        </Navbar>
        <HeaderTag>ChatWell</HeaderTag>
      </>
    )
  }
}

export default Nav
