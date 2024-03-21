import React, { useState } from 'react'
import '../css/Done.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import ShowTask from '../ShowTask';

function Inprogress() {
    const [done , setDone] = useState([
    {task: 'Project G', color : 'pink' , comment: 2},
     {task: 'Project P', color : 'red'},
    {task: "Project F" ,color:"green"},
    {task: 'Project Z', color : 'grey' },
]);

    const handleClick = () =>{
        const newTask = { task : 'Project P', color: "green",comment: 1}
        setDone(prev =>[...prev, newTask])
    }
  return (
    

        <div  id='doneParent'>
            <div  id='done'>
                <h3>In Progress</h3>
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

export default Inprogress




