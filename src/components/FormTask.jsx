import React, {useState} from 'react';
import '../style-sheets/FormTask.css';
import {v4 as uuidv4} from 'uuid';

function FormTask(props){

  const[input, setInput] = useState ('');

  const handleChange = e =>{
    setInput(e.target.value);
   
  }


   const handleShipping = e =>{
     e.preventDefault();
     

     const newTask ={
       id: uuidv4(),
       text: input,
       completed: false
     }

     props.onSubmit(newTask);

   }


  return(
   <form 
     className='form-task'
     onSubmit={handleShipping}>
    <input 
        className='input-task'
        type= 'text'
        placeholder='Write a task...'
        name='text'
        onChange={handleChange}
    />
    <button className='button-task'>
        Add Task
    </button>

   </form>


  );
}

export default FormTask;