import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Button from './elements/Button'
import Nav from './Nav'
import { Header } from './Styled'
import { getTopics, saveTopics } from '../actions/topics'
import Topic from './Topic'
import Footer from './Footer'

const theme = {
  primary: '#80ced6',
  secondary: '#4040a1',
  margin: 'auto',
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
          <div style={{ height: '100vh', overflow: 'hidden' }}>
            {error && <div>{error}</div>}
            <Nav />
            <Header style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>Select topics</Header>
            <h4 className="sponsor-font" style={{ textAlign: 'center', fontSize: '18px' }}>I can help with...</h4>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <ul className="sponsor-font" style={{ background: 'transparent', width: '30vw', height: '45vh', textAlign: 'left', overflowY: 'scroll', marginBottom: '25px' }}>
                {topics.map(topic =>
                  <Topic
                    key={topic.id}
                    topic={topic.topic}
                    id={topic.id}
                    toggleTopic={this.toggleTopic} />
                )}
              </ul>
            </div>
            <br />
            <Link to='/sponsor/pair' style={{ textDecoration: 'none' }}><Button color="primary" onClick={this.handleContinue} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>CONTINUE</Button></Link>
            <br />
            <br />
            <Footer />
          </div>
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
