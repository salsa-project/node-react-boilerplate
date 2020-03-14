import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css'
import RootTopic from './components/RootTopic'
import BottomBar from './components/BottomBar'
import db from './configs/db'

function App(){

  return(
    <div>
        <RootTopic />
	<BottomBar />
    </div>
  )

}

export default(App)
