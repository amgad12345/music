import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'

import NavBar from './components/NavBar'

import MusicBands from './components/MusicBands'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:category" component={MusicBands}></Route>
          
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default App