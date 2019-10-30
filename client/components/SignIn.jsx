import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Button from './elements/Button'
import Footer from './Footer'
import Nav from './Nav'

import { isAuthenticated, signIn } from 'authenticare/client'
import { getUserType } from '../actions/typeOfUser'

const theme = {
  primary: '#80ced6',
  secondary: '#4040a1',
  margin: 'auto',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

function SignIn (props) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    props.dispatch(getUserType('registeredSponsor'))
    signIn({
      username: form.username,
      password: form.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/sponsor/topics')
        }
      })
  }

  return (
  <>
  <div className="hero flex-center">
    <ThemeProvider theme={theme}>
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <Nav />
        <h1 style={{ textAlign: 'center' }}>Sign In</h1>
        <h2 style={{ textAlign: 'center' }}>Username:</h2>
        <div className="input">
          <input className="input" name='username'
            placeholder='Username'
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <h2 style={{ textAlign: 'center' }}>Password:</h2>
        <div className="input">
          <input className="input" name='password'
            placeholder='Password'
            type='password'
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <br/>
        <Link to='/sponsor/topics' style={{ textDecoration: 'none' }}><Button color="primary" onClick={handleClick} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>SIGN IN</Button></Link>
        <br />
        <Footer />
      </div>
    </ThemeProvider>
  </div>
  </>
  )
}

export default connect()(SignIn)
