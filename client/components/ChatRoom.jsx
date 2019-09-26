import React, { Component } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3000')

export default class ChatRoom extends Component {
  constructor(props) {
    super(props)
    socket.on('new message', (message) => {
      console.log(`this is the client side message: ${message}`)
      this.setState({
        messages: [...this.state.messages, message]
      })
    })
  }

  state = {
    message: '',
    socket: null,
    user: null,
    messages: ['this is a message']
  }

  componentWillMount() {
      this.initSocket()
    //   this.setUser()
  }

  initSocket = () => {
      socket.on('connect', () => {
          console.log("Connected to Client")
      })
      this.setState({
          socket
      })
  }

  setUser = (user) => {
    const socket = this.state.socket
    // const user = socket.id
    socket.emit('user connected', user)
    this.setState({
        user
    })
  }

  onChangeHandler = (evt) => {
    this.setState({
      message: evt.target.value
    })
  }

  onClickHandler = (evt) => {
    evt.preventDefault()
    socket.emit('send message', this.state.message)
  }

  render () {
    return (
      <>
        <h1>This is the socket component</h1>
        {this.state.messages.map(message => {
          return <p>{message}</p>
        })}
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br/>
        <input type="text" onChange={this.onChangeHandler}/>
        <button type="submit" onClick={this.onClickHandler}>Send</button>
      </>
    )
  }
}