import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from 'component/Navbar'
import TopSelector from 'features/top-selector/TopSelector'

const App = () => (
  <div>
    <Navbar />
    <Router>
      <Switch>
        <Route path='/'>
          <TopSelector />
        </Route>
        <Route path='/top-selector'>
          <TopSelector />
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App
