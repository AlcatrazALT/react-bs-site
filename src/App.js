import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navibar from './components/Navibar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import About from './components/About'

function App() {
  return (
    <>
      <Router>
        <Navibar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/about" component={About} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App
