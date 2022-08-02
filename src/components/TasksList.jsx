import React, {useState} from 'react';
import FormTask from './FormTask';
import Tasks from './Tasks'
import '../style-sheets/TaskList.css';

function TasksList() {

  const[tasks, setTasks]= useState([]);

  const addTask = task =>  { 
     if (task.text.trim()) {                        {/*identify if string is not empty */}
       task.text = task.text.trim();                {{/*Remove spaces */}}
       const updatedTasks = [task, ...tasks];            {/*... spread object converts to individual tasks in the array */}
       setTasks(updatedTasks);                            {/*Update status */}
  };

{/* 
  const completeTask = id =>{
    const updatedTasks = tasks.map(task => {
     if (task.id === id) {
       task.completed = !task.completed;
    }
      return task;
   });

    setTasks(updatedTasks);
  }*/}
}



 const deleteTask = id =>{
   const updatedTasks = tasks.filter(task => task.id !== id);
   setTasks(updatedTasks);

 }


  return(
     <>
     <FormTask onSubmit={addTask} />
     <div className='container-task-list'>
         {/*render task list*/}
        {
          tasks.map((task)=>
          <Tasks 
             key={task.id}
             id={task.id}
             text={task.text}
             completed={task.completed}
           
             deleteTask={deleteTask} />
          )
        }
     </div>

     </>   
    

    );

}
export default TasksList;