import React , {useState, useEffect} from 'react'

import db from './../configs/db'

function BottomBar(){

  function handleClick(){
    db.topics.add({title: '1st title..', body: '1st body', parent: 0})
    var readDb = db.topics.toArray()
    readDb.then((rs)=>{
    document.getElementById('test').innerText = rs[1].title;
    console.log(rs)
    })
  }

  return(
	<div className='bottombar-container'>
	  <button onClick={handleClick} className='add-topic-btn'>+</button>
          <p id="test">any text here</p>
	</div>
  )

}

export default(BottomBar)
