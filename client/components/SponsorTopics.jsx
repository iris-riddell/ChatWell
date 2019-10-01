import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Button from './elements/Button'
import Header from './Header'
import TitleArea from './elements/TitleArea'
import { getTopics, saveTopics } from '../actions/topics'
import Topic from './Topic'
import Footer from './Footer'
import Nav from './Nav'

const theme = {
  primary: '#80ced6',
  secondary: '#4040a1',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class SponsorTopics extends React.Component {
  state = {
    selectedTopics: []
  }

  componentDidMount () {
    this.props.dispatch(getTopics())
  }

  toggleTopic = (topic) => {
    let selection = []

    if (this.state.selectedTopics.includes(topic)) {
      selection = this.state.selectedTopics.filter(t => t !== topic)
    } else {
      selection = [...this.state.selectedTopics]
      selection.push(topic)
    }

    this.setState({ selectedTopics: selection })
  }

  handleContinue = () => {
    this.props.dispatch(saveTopics(this.state.selectedTopics))
    this.props.history.push('/sponsor/pair')
  }

  render () {
    const { topics, pending, error } = this.props
    if (pending) {
      return <div>LOADING...</div>
    }

    return (
      <div className="hero flex-center">
        <ThemeProvider theme={theme} >
          {error && <div>{error}</div>}
          <Header />
          <TitleArea style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>I can help with...</TitleArea>
          <br />
          <h4 className="sponsor-font" style={{ textAlign: 'center', fontSize: '18px' }}>(Select all that apply)</h4>
          <ul className="sponsor-font" style={{ textAlign: 'center' }}>
            {topics.map(topic =>
              <Topic
                key={topic.id}
                topic={topic.topic}
                id={topic.id}
                toggleTopic={this.toggleTopic} />
            )}
          </ul>
          <Link to='/sponsor/guidance' style={{ textDecoration: 'none' }}><Button color="secondary" onClick={this.handleContinue} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>CONTINUE</Button></Link>
          <br />
          <Link to='/' style={{ textDecoration: 'none' }}><Button color="secondary" onClick={this.handleSponsor} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>BACK TO MAIN</Button></Link>
          {' '}
          <br />
          <Footer />
        </ThemeProvider>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    topics: state.topics,
    pending: state.pending,
    error: state.error
  }
}

export default connect(mapStateToProps)(SponsorTopics)
