import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Nav from './Nav'
import Footer from './Footer'
import { Header, Background, HelpButton, GetHelpButton } from './Styled'
import { getUserType } from '../actions/typeOfUser'

// I'm not too sure if this theme variable is needed but I'm leaving it for now. Will come back to later.

const theme = {
  primary: '#009999;',
  secondary: '#80ced6',
  align: 'middle',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class Homepage extends React.Component {
  state = {
    userType: ''
  }

  handleClient = () => {
    this.props.dispatch(getUserType('client'))
  }

  handleSponsor = () => {
    this.props.dispatch(getUserType('sponsor'))
  }

  render () {
    return (
      <>
        <Nav />
        <Header>Sometimes you just need to talk to someone. We can help with that.</Header>
        <Background> 
          <Link to='/topics' style={{ textDecoration: 'none' }}><GetHelpButton onClick={this.handleClient}>I NEED HELP</GetHelpButton></Link>

          <div style={{ height: '100px' }}></div>

          <Link to='/sponsor/login' style={{ textDecoration: 'none' }}><HelpButton onClick={this.handleSponsor}>I WANT TO HELP</HelpButton></Link>
        </Background>
        <Footer />
      </>   
    )
  }
}

const mapStateToProps = state => {
  return {
    userType: state.userType
  }
}

export default connect(mapStateToProps)(Homepage)
