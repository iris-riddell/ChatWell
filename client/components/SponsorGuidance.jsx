import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Button from './elements/Button'
import Footer from './Footer'
import Nav from './Nav'
import { Header } from './Styled'
const theme = {
  primary: '#80ced6',
  secondary: '#4040a1',
  margin: 'auto',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

function SponsorGuidance () {
  return (
    <div className="hero flex-center">
      <ThemeProvider theme={theme}>
        <div style={{ height: '100vh', overflow: 'hidden' }}>
        <Nav />
        <Header style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>Your responsibilities</Header>
        <p className="sponsor-font" style={{ paddingTop: "20px",paddingLeft: "200px", paddingRight: "200px", fontSize: "18px", textAlign: 'center' }}>Thank you for offering to provide some support and guidance to a fellow human being! <br />You're awesome. Hopefully, you'll make someone's day a little easier.<br /><br />
        While you are stepping into a supporting role, please remember to keep yourself safe. <br />If a conversation becomes too intense or triggering, you are 100% free to leave that conversation and look after your own wellbeing.<br /><br />
        Your role is not to fix everyon's problems, or offer medical advice. Instead, we ask you to be a compassionate, listening ear, and only share as much of your own experience as you want. That part is completely up to you.
        </p>
        <h5 className="client-font" style={{ textAlign: 'center', fontSize: '24px' }}>Resources</h5>
        <ul className="client-font" style={{ textAlign: 'center', fontSize: '14px' }}>
          <li><a href="https://www.mentalhealth.org.nz/get-help/in-crisis/">Mental Health Foundation of New Zealand</a></li>
          <li><a href="https://www.lifeline.org.nz/">Lifeline Aotearoa</a></li>
          <li><a href="https://www.youthline.co.nz/">Youthline</a></li>
          <li><a href="http://www.samaritans.org.nz/">Samaritans</a></li>
          <li><a href="https://www.talkingworks.co.nz/dir.html">Talking Works Counselling Service</a></li>
          <li><a href="https://onlinetherapy.co.nz/">Online Therapy</a></li>
        </ul>
        <br/>
        <Link to='/sponsor/topics' style={{ textDecoration: 'none' }}><Button color="primary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>CONTINUE</Button></Link>
        <br />
        </div>
        <Footer />
        
      </ThemeProvider>
    </div>
  )
}

export default SponsorGuidance
