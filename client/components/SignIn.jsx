import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Button from './elements/Button'

// import { GridForm, ColOne, ColTwo } from './Styled'
// import Button from './elements/Button'

import { isAuthenticated, signIn } from 'authenticare/client'
import { getUserType } from '../actions/typeOfUser'

const theme = {
  primary: '#618685',
  secondary: '#4040a1',
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
        <ThemeProvider theme={theme}>
          <h1 style={{ textAlign: 'center' }}>Sign In</h1>
          {/* <GridForm> */}
          <h2 style={{ textAlign: 'center' }}>Username:</h2>
          <div className="input">
            <input name='username'
              placeholder='Username'
              value={form.username}
              onChange={handleChange}
            />
          </div>
          {/* <ColOne>Username:</ColOne>
          <ColTwo name='username'
            value={form.username}
            onChange={handleChange} /> */}
          {/* <ColOne>Password:</ColOne> */}
          {/* <ColTwo name='password'
            type='password'
            value={form.password}
            onChange={handleChange} /> */}
          <h2 style={{ textAlign: 'center' }}>Password:</h2>
          <div className="input">
            <input name='password'
              placeholder='Password'
              type='password'
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <br/>
          <Link to='/sponsor/topics' style={{ textDecoration: 'none' }}><Button color="secondary" onClick={handleClick} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>SIGN IN</Button></Link>
          <br />
          <Link to='/' style={{ textDecoration: 'none' }}><Button color="secondary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>BACK TO MAIN</Button></Link>
          {/* </GridForm> */}
        </ThemeProvider>
  </>
  )
}

export default connect()(SignIn)
