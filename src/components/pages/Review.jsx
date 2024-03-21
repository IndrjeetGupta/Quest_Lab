import React, { useState } from 'react'
import '../css/Done.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import ShowTask from '../ShowTask';

function Review() {
    const [done , setDone] = useState([
    {task: 'Project W', color : 'lightblue' , comment: 14},
    {task: 'Project T', color : 'grey', comment: 10},
    {task: "Project U" ,color:"green", comment: 6},
    {task: "Project q" ,color:"orchid"},
    {task: "Project V" ,color:"yellow", comment: 2},
]);

    const handleClick = () =>{
        const newTask = { task : 'Project P', color: "red",comment: 1}
        setDone(prev =>[...prev, newTask])
    }
  return (
    

        <div  id='doneParent'>
            <div  id='done'>
                <h3>Review</h3>
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

export default Review





