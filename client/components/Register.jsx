import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { randomName, randomAvatar } from '../utilities'
import { ThemeProvider } from 'styled-components'
import { setUsername } from '../actions/username'
import Button from './elements/Button'
import Nav from './Nav'
import TitleArea from './elements/TitleArea'
import Footer from './Footer'

const theme = {
  primary: '#009999',
  secondary: '#82b74b',
  margin: 'auto',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}
class Register extends React.Component {
  state = {
    username: ''
  }

  componentDidMount () {
    this.setState({
      username: randomAvatar() + ' ' + randomName()
    })
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleContinue = () => {
    this.props.dispatch(setUsername(this.state.username))
  }

  generateUsername = () => {
    this.setState({
      username: randomAvatar() + ' ' + randomName()
    })
  }

  render () {
    return (
      <div className="hero-client flex-center">
        <ThemeProvider theme={theme}>
          <div style={{ height: '100vh', overflow: 'hidden' }}>
            <Nav />
            <TitleArea style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>Write a nickname for yourself or click the button below to randomise one:</TitleArea>
            <br />
            <div className="input">
              <input className="input" type="text" value={this.state.username} onChange={this.handleChange} />
            </div>
            {(this.state.username === '') ? <p className="sponsor-font" style={{ textAlign: 'center' }}>If this field is left empty username defaults to 'Anonymous'</p> : null}
            <br />
            <Button color="primary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }} name="generateUsername" value="generateUsername"
              onClick={ (e) => { this.generateUsername() }}>RANDOM NICKNAME</Button>
            <br />
            <Link to='/guidance' style={{ textDecoration: 'none' }}><Button color="primary" onClick={this.handleContinue} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>CONTINUE</Button></Link>
            <br />
            <br />
            <Footer />

          </div>

        </ThemeProvider>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    username: () => dispatch({ randomName })
  }
}

export default connect()(Register)
