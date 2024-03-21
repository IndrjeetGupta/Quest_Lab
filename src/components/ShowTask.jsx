import React from 'react'
import './ShowTask.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMessage } from '@fortawesome/free-solid-svg-icons'
const ShowTask = ({task , color,comment}) => {

  return (
    
    <div id='parent'>

        <div id='div1' style={{backgroundColor:color}}>

        </div>
        <div>{task}</div>

       <div id='mainIcon' >
       <div>
        <FontAwesomeIcon icon={faBars} style={{color:"grey"}} /> 
        </div>

        <div>
        <FontAwesomeIcon icon={faMessage}  style={{color:"grey"}}/> {comment}
        </div>

       </div>

 
    </div>
  )
}

export default ShowTask


