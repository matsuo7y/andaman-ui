import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './component/util/Navbar'
import { TopSelector } from './component/TopSelector'

const App = () =>
  (
    <div>
      <Navbar />
      <TopSelector />
    </div>
  )

export default App
