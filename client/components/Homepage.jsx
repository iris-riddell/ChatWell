import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Nav from './Nav'
import Footer from './Footer'
import { Header, HelpButton, GetHelpButton } from './Styled'
import Div from './elements/Div'
import { getUserType } from '../actions/typeOfUser'

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
      <div className="div">
          <div style={{ height: '100vh', overflow: 'hidden' }}>
          <Nav />
          <Header style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>Sometimes you just need to talk to someone. We can help with that.</Header>
          <Div> 
            <Link to='/topics' style={{ textDecoration: 'none' }}><GetHelpButton onClick={this.handleClient}>I NEED HELP</GetHelpButton></Link>

            <div style={{ height: '100px' }}></div>

            <Link to='/sponsor/login' style={{ textDecoration: 'none' }}><HelpButton onClick={this.handleSponsor}>I WANT TO HELP</HelpButton></Link>
          </Div>
            <Footer />
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userType: state.userType
  }
}

export default connect(mapStateToProps)(Homepage)
