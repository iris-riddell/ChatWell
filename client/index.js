import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

// components below
import App from './components/App'
import ClientTopics from './components/ClientTopics'
import SponsorTopics from './components/SponsorTopics'
import Register from './components/Register'
import SponsorRegister from './components/SponsorRegister'
import Guidance from './components/Guidance'
import SponsorGuidance from './components/SponsorGuidance'
import Pair from './components/Pair'
import ChatRoom from './components/ChatRoom'
import SignIn from './components/SignIn'
import SponsorLogin from './components/SponsorLogin'
import SponsorSignUp from './components/SponsorSignUp'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HashRouter>
      <Switch>
        <Provider store={store}>
          <Route exact path='/' component={App} />
          <Route path='/topics' component={ClientTopics} />
          <Route path='/sponsor/topics' component={SponsorTopics} />
          <Route path='/register' component={Register} />
          <Route path='/sponsor/register' component={SponsorRegister} />
          <Route path='/guidance' component={Guidance} />
          <Route path='/sponsor/guidance' component={SponsorGuidance} />
          <Route path="/pair" component={Pair} />
          <Route path="/sponsor/pair" component={Pair} />
          <Route path='/ChatRoom' component={ChatRoom} />
          <Route path='/sponsor/signin' component={SignIn} />
          <Route path='/sponsor/signup' component={SponsorSignUp} />
          <Route path='/sponsor/login' component={SponsorLogin} />
        </Provider>
      </Switch>
    </HashRouter>,
    document.getElementById('app')
  )
})
