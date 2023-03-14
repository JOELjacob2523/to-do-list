import './App.css';
import { useState } from 'react';
import AddTask from './Components/AddTask';
import Task from './Components/Task';

function App() {
  const [taskList, setTaskList] = useState([]);

  function addTaskToList(task) {
    setTaskList([...taskList, task]);
  }
  return (
    <div className="App">
      <AddTask addTaskToList={addTaskToList} />
      <Task taskList={taskList} />
    </div>
  );
}

export default App;
