import React from 'react'
import { Switch, Route } from 'react-router-dom'

function Routes (){
  return (
    <Switch>
      <Route exact path="/">
      <p>Home</p>
      </Route>
      <Route path="/sprites">
        <p>Sprite Editor</p>
      </Route>
      <Route path="*">
        <p>No match</p>
      </Route>
    </Switch>
  )
}

export default Routes
