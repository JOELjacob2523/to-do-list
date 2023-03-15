import './App.css';
import { useState } from 'react';
import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';
import './Components/AddTask.css';
import './Components/Task.css'

function App() {
  const [taskList, setTaskList] = useState([]);

  function addTaskToList(task) {
    setTaskList([...taskList, task]);
  }
  return (
    <div className="App">
      <AddTask addTaskToList={addTaskToList} />
      <Tasks taskList={taskList} />
    </div>
  );
}

export default App;
