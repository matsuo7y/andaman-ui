import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from 'component/Navbar'
import TopSelector from 'features/top-selector/TopSelector'

const App = () =>
  (
    <div>
      <Navbar />
      <TopSelector />
    </div>
  )

export default App
