/* eslint-disable no-console */

const matchTopics = require('./algo')

let availableClients = [
  // { room: 'clientnocFS0zZg6DjOOKjAAAA',
  //    username: 'anonymous',
  //    usertype: 'sponsor',
  //    topics: [ 'Depression' ] },
  //      { room: 'clientdasdfasdfasdfA',
  //   username: 'anonymous',
  //   usertype: 'sponsor',
  //   topics: [ 'Depression', 'Anxiety' ] }
]
let availableSponsors = [
  // { room: 'sponsornocFS0zZg6DjOOKjAAAA',
  //   username: 'anonymous',
  //   usertype: 'sponsor',
  //   topics: [ 'Depression' ] },
  //   { room: 'sponsordasdfasdfasdfA',
  //   username: 'anonymous',
  //   usertype: 'sponsor',
  //   topics: [ 'Depression', 'Anxiety' ] }
]

const socket = (io) => {
  // Connect on page load
  io.on('connection', (socket) => {
    console.log(`A user has connected: ${socket.id}`)
    let users = io.engine.clientsCount
    console.log(`Users connected: ${users}`)
    const user = socket.id
    let room = ''

    // Join a room
    socket.on('subscribe', (userData) => {
      const usertype = userData.usertype
      room = usertype + user
      // as a client:
      if (usertype === 'client') {
        // if an available sponsor exists
        if (availableSponsors.length > 0) {
          // scan for best match
          const bestMatch = matchTopics(userData, availableSponsors)
          // change room to be available sponsors' room
          room = bestMatch.room
          // join the room with the best match
          socket.join(room)
          console.log(`Joined Sponsor Room: ${room}`)
          // find the index of the room in the available sponsors array
          const indexOfSponsor = availableSponsors.findIndex((sponsor) => {
            return sponsor.room === room
          })
          // then remove that sponsor room from the list of available sponsors
          availableSponsors.splice(indexOfSponsor, 1)
          console.log('Remaining available Sponsors:')
          console.log(availableSponsors)
        } else {
          // otherwise, create an available client room
          socket.join(room)
          console.log(`Created new Client Room: ${room}`)
          // add this room to the list of available clients
          // along with the user data
          newAvailableClient = {
            room: room,
            ...userData,
          }
          availableClients.push(newAvailableClient)
          console.log('Available Clients:')
          console.log(availableClients)
        }
      }
      // as a sponsor:
      else {
        // if an available client exists
        if (availableClients.length > 0) {
          // scan for best match
          const bestMatch = matchTopics(userData, availableClients)
          // change room to be available clients' room
          room = bestMatch.room
          // join the room with the best match
          socket.join(room)
          console.log(`Joined Client Room: ${room}`)
          // find the index of the room in the available sponsors array
          const indexOfClient = availableClients.findIndex((client) => {
            return client.room === room
          })
          // then remove that sponsor room from the list of available sponsors
          availableClients.splice(indexOfClient, 1)
          console.log('Remaining available Clients:')
          console.log(availableClients)
        } else {
          // otherwise, create an available sponsor room
          socket.join(room)
          console.log(`Created new Sponsor room: ${room}`)
          // add this room to the list of available clients
          // along with the user data
          newAvailableSponsor = {
            room: room,
            ...userData,
          }
          availableSponsors.push(newAvailableSponsor)
          console.log('Available Sponsors:')
          console.log(availableSponsors)
        }
      }
    })

    // Send message to room that was joined
    socket.on('send message', (data) => {
      io.in(room).emit('new message', data)
    })

    // Leave a room
    socket.on('unsubscribe', () => {
      console.log(`User ${room} has left room: ${room}`)
      io.in(room).emit('confirm disconnect')
      socket.leave(room)
      removeIfAvailable(room)
      room = ''
    })

    //  Disconnect on page close
    socket.on('disconnect', () => {
      console.log(`User ${room} has disconnected`)
      io.in(room).emit('confirm disconnect')
      users = io.engine.clientsCount
      console.log(`Users connected: ${users}`)
      removeIfAvailable(room)
      room = ''
    })
  })
}

module.exports = socket

// Supporting functions

// if the user was in an availability list when closing the window
// (which would only happen if they didn't get a pairing)
// or chose to disconnect after connecting but before being matched with a pair
// remove them from the availability list
const removeIfAvailable = (room) => {
  let index = -1
  // for clients
  index = availableClients.findIndex((el) => {
    return el.room === room
  })
  if (index > -1) {
    availableClients.splice(index, 1)
    console.log(`User ${room} removed from availableClients`)
  }
  // for sponsors
  index = availableSponsors.findIndex((el) => {
    return el.room === room
  })
  if (index > -1) {
    availableSponsors.splice(index, 1)
    console.log(`User ${room} removed from availableSponsors`)
  }
}

// ### Old Code For Reference ###

  // ### Join room ###
  // if (users % 2 !== 0) {
  //   socket.join(Object.keys(io.engine.clients)[users - 1])
  //   console.log('Room name:' + Object.keys(io.engine.clients)[users - 1])
  // } else {
  //   socket.join(Object.keys(io.engine.clients)[users - 2])
  //   console.log('Room name:' + Object.keys(io.engine.clients)[users - 2])
  // }

  // ### Send message ###
  // socket.on('send message', (data) => {
  //   if (users % 2 !== 0) {
  //     io.to(Object.keys(io.engine.clients)[users - 1]).emit('new message', data)
  //   } else {
  //     io.to(Object.keys(io.engine.clients)[users - 2]).emit('new message', data)
  //   }
  // })

  // ### Getting user socket id ###
  // room = usertype + Object.keys(io.engine.clients)[users - 1]

  // ### Pattern for matching clients and sponsors ###
  // if an available client room exists
  // if (availableClients.length > 0) {
  //   // join the first available client room
  //   socket.join(availableClients[0])
  //   console.log(`Joined Client room: ${availableClients[0]}`)
  //   // change room to be available clients' room
  //   room = availableClients[0]
  //   // then remove that client room from the list of available clients
  //   availableClients.splice(0, 1)
  //   console.log(`Remaining available Clients: ${availableClients}`)
  // } else {
  //   // otherwise, create an available sponsor room
  //   socket.join(room)
  //   console.log(`Created new Sponsor room: ${room}`)
  //   // add this room to the list of available sponsors
  //   availableSponsors.push(room)
  //   console.log(`Available Sponsors: ${availableSponsors}`)
  // }