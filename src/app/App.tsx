import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Links } from 'model/enums'
import Navbar from 'component/Navbar'
import TopSelector from 'features/top-selector/TopSelector'
import TradeRuns from 'features/trade-runs/TradeRuns'

const App = () => (
  <div>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path="/">
          <TopSelector />
        </Route>
        <Route path={Links.TopSelector}>
          <TopSelector />
        </Route>
        <Route path={Links.TradeRuns}>
          <TradeRuns />
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App
