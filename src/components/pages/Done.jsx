import React, { useState } from 'react'
import '../css/Done.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import ShowTask from '../ShowTask';

function Done() {
    const [done , setDone] = useState([
    {task: 'Project D', color : 'skyblue' , comment: 9},
    {task: 'Project N', color : 'orchid', comment: 4},
    {task: "Project X" ,color:"gold", comment: 24},
    {task: "Project R" ,color:"grey", comment: 2},

])
    ;

    const handleClick = () =>{
        const newTask = { task : 'Project P', color: "red",comment: 1}
        setDone(prev =>[...prev, newTask])
    }
  return (
    

        <div  id='doneParent'>
            <div  id='done'>
                <h3>Done</h3>
                <FontAwesomeIcon icon={faEllipsis} />
            </div>

            <div >
                {
                    done.map((e) =>(
                        <ShowTask {...e}/>
                    ))
                }

                <button id='btn' onClick={handleClick}> + Add a card</button>

            </div>

        </div>
      
    
  )
}

export default Done



