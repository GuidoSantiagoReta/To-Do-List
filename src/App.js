
import './App.css';
import swaregrapLogo from'./images/logo2.png';
import TaskList from './components/TasksList';




function App() {
  return (

    <div className="todolist">
     <div className="logo-container">

       <img 
       src={swaregrapLogo} 
       className='swaregraplogo' />
       </div>
       <div className="task-list">
         <h1>Task List</h1>
         <TaskList />

       </div>
    
    </div>
  
  );
  
}

export default App;

