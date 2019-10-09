import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { ThemeProvider } from 'styled-components'
import BigButton from './elements/BigButton'
import Div from './elements/Div'
import TitleArea from './elements/TitleArea'
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
        <ThemeProvider theme={theme}>
          <div style={{ height: '100vh', overflow: 'hidden' }}>
          <Header />
          <TitleArea style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>Sometimes you just need to talk to someone. We can help with that.</TitleArea>
          <Div> 
            <Link to='/topics' style={{ textDecoration: 'none' }}><BigButton color="primary" onClick={this.handleClient} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>I NEED HELP</BigButton></Link>

            <div style={{ height: '100px' }}></div>

            <Link to='/sponsor/login' style={{ textDecoration: 'none' }}><BigButton color="secondary" onClick={this.handleSponsor} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>I WANT TO HELP</BigButton></Link>
          </Div>
            <Footer />
          </div>
        </ThemeProvider>
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
