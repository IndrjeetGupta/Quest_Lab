import React, { useState } from 'react'
import '../css/Done.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import ShowTask from '../ShowTask';

function Todo() {
    const [done , setDone] = useState([
    {task: 'Project A', color : 'green' }, 
    {task: 'Project B', color : 'gold', comment: 2},
    {task: "Project C" ,color:"orchid", comment: 1},
    {task: "Project M" ,color:"orange"},
    {task: "Project K" ,color:"turquoise", comment: 1}

]);

    const handleClick = () =>{
        const newTask = { task : 'Project P', color: "red",comment: 1}
        setDone(prev =>[...prev, newTask])
    }
  return (
    

        <div  id='doneParent'>
            <div  id='done'>
                <h3>To Do</h3>
                <FontAwesomeIcon icon={faEllipsis} />
            </div>

            <div>
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

export default Todo






