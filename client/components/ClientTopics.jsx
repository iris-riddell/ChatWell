import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
// import { fetchTopics } from '../actions'
import Button from './elements/Button'
import Checkbox from './Checkbox'

// import TopicListItem from './TopicListItem'
const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  alert: 'yellow',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

const topics = ['Depression', 'Anxiety', 'Bipolar', 'Body image/eating', 'Addiction', 'PTSD', 'OCD', 'Dissociative episodes', 'Dysphoria', 'Tics', 'Psychosis', 'Paranoia']

// Not sure how to do it, but I need to get the info from db into this line!
// ^^ This dynamically renders a checklist of topics, which
// will need to be connected up to the database.

class ClientTopics extends React.Component {
  state={
    topics: [],
    checkboxes: topics.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      })
    )
  }

selectAllCheckboxes = isSelected => {
  Object.keys(this.state.checkboxes).forEach(checkbox => {
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [checkbox]: isSelected
      }
    }))
  })
}

deselectAll = () => this.selectAllCheckboxes(false)

handleCheckboxChange = changeEvent => {
  const { name } = changeEvent.target

  this.setState(prevState => ({
    checkboxes: {
      ...prevState.checkboxes,
      [name]: !prevState.checkboxes[name]
    }
  }))
}

handleFormSubmit = formSubmitEvent => {
  formSubmitEvent.preventDefault()

  Object.keys(this.state.checkboxes)
    .filter(checkbox => this.state.checkboxes[checkbox])
    .forEach(checkbox => {
    })
}

createCheckbox = option => (
  <Checkbox
    label={option}
    isSelected={this.state.checkboxes[option]}
    onCheckboxChange={this.handleCheckboxChange}
    key={option}
  />
)

createCheckboxes = () => topics.map(this.createCheckbox)

render () {
  return (
    <ThemeProvider theme={theme}>
      <h2>I want to talk about...</h2>
      {/* Using a checklist for now, until the TopicListItem is ready to go. */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={this.deselectAll}
              >
                Deselect All
              </button>
              <button type="submit" className="btn btn-primary" onClick={() => this.props.dispatch(fetchTopics(this.state.isSelected))}>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* {props.topics.map(topic => {
              return <>
              <TopicListItem
              key={topic.id}
              topic={topic}/>
              </>
        })} */}
      <Link to='/register'><Button color="primary">CONTINUE</Button></Link>
      <br />
      <Link to='/'><Button color="secondary">BACK TO MAIN</Button></Link>
    </ThemeProvider>
  )
}
}

const mapStateToProps = state => {
  return {
    topics: state.topics
  }
}

export default connect(mapStateToProps)(ClientTopics)