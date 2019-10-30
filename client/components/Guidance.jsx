import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'
import Footer from './Footer'
import Nav from './Nav'
import { Header } from './Styled'

const theme = {
  primary: '#009999',
  secondary: '#82b74b',
  alert: 'yellow',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

function Guidance (props) {
  return (
    <div className="hero-client flex-center">
      <ThemeProvider theme={theme}>
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <Nav />
        <Header style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>Please keep in mind...</Header>
        <br/>
        <p className="client-font" style={{ paddingLeft: "200px", paddingRight: "200px", fontSize: "18px", textAlign: 'center' }}>
        This app is for support purposes only. Remember you are speaking to another human who has been through a lot. <br/><br/> 
        This is not a professional counselling service, simply a way to connect with others who may share your experiences in a safe, completely anonymous environment. <br/><br/>

        If you are at risk in any way, please seek the advice of healthcare professionals.
        </p>
        <br/>
        <h5 className="client-font" style={{ textAlign: 'center', fontSize: '24px' }}>Resources</h5>
        <ul className="client-font" style={{ textAlign: 'center', fontSize: '14px' }}>
          <li><a href="https://www.mentalhealth.org.nz/get-help/in-crisis/">Mental Health Foundation of New Zealand</a></li>
          <li><a href="https://www.lifeline.org.nz/">Lifeline Aotearoa</a></li>
          <li><a href="https://www.youthline.co.nz/">Youthline</a></li>
          <li><a href="http://www.samaritans.org.nz/">Samaritans</a></li>
          <li><a href="https://www.talkingworks.co.nz/dir.html">Talking Works Counselling Service</a></li>
          <li><a href="https://onlinetherapy.co.nz/">Online Therapy</a></li>
        </ul>
        <br />
        <Link to='/pair' style={{ textDecoration: 'none' }}><Button color="primary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>CONTINUE</Button></Link>
        <br/>
        <br/>
        <br/>
        <Footer />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Guidance
