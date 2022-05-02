import React from 'react';
import '../style-sheets/Tasks.css'
import {AiOutlineCloseSquare} from "react-icons/ai";


function Task ({id, text, completed, completeTask, deleteTask}){

    return(
       <div className={ completed ? 'container-task completed ' : 'container-task '}>   {/* conditional classname*/}
          <div 
          
             className='text-task'
              onClick ={() => completeTask(id)}
              >
              {text}
          </div>
          <div 
              className='task-container-icons'
              onClick={()=> deleteTask(id)}
          > 
          <AiOutlineCloseSquare className='icon-task'/>

          </div>
       </div>
    );

}

export default Task;