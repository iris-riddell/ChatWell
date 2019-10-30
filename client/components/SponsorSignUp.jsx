import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { isAuthenticated, register } from 'authenticare/client'

import { randomName, randomAvatar } from '../utilities'
import { setUsername } from '../actions/username'
import Nav from './Nav'
import { Header } from './Styled'
import Footer from './Footer'
import Button from './elements/Button'
import { getUserType } from '../actions/typeOfUser'

const theme = {
  primary: '#80ced6',
  secondary: '#4040a1',
  margin: 'auto',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}


class SponsorSignUp extends React.Component {
  state = {
    username: randomName(),
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRegister = (event) => {
    this.props.dispatch(getUserType('registeredSponsor'))
    register({
      username: this.state.username,
      password: this.state.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.dispatch(setUsername(this.state.username))
        }
      })
  }

  generateUsername = () => {
    this.setState({
      username: randomName()
    })
  }

  render () {
    return (
      <div className="hero flex-center">
        <ThemeProvider theme={theme}>
        <div style={{height: '100vh', overflow: 'hidden'}}>

          <Nav />
          <Header style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>Choose your nickname and password. You can also randomise a nickname by clicking the button below.</Header>
          <br />
          <br />
          <div className="input">
            <input className="input" type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}/>
          </div>
          <br />
          <div className="input">
            <input className="input" type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}/>
          </div>
          {(this.state.username === '') ? <p className="sponsor-font" style={{ textAlign: 'center' }}>If this field is left empty username defaults to 'Anonymous'</p> : null}
          <br />
          <Button style={{ fontFamily: 'Lato', fontWeight: 'bold' }} color="primary" name="generateUsername" value="generateUsername"
            onClick={ (e) => { this.generateUsername() }}>RANDOM USERNAME</Button>
            <br/>
          <Link to='/sponsor/guidance' style={{ textDecoration: 'none' }}><Button color="primary" onClick={this.handleRegister} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>REGISTER</Button></Link>
          <br />
          <br />
          <Footer />
          </div>
        </ThemeProvider>
      </div>
    )
  }
}

export default connect()(SponsorSignUp)
