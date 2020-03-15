import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css'
import RootTopic from './components/RootTopic'
import BottomBar from './components/BottomBar'
import Paths from './components/Paths'
import db from './configs/db'

function App(){

  return(
    <div>
	<Paths />
        <RootTopic />
	<BottomBar />
    </div>
  )

}

export default(App)
