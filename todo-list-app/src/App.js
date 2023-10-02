
import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    if (taskText.trim() === '') return;
    setTasks([...tasks, { text: taskText, completed: false }]);
    setTaskText('');
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const markAsDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>My Unique To-Do List</h1>
      </div>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task to be done"
          value={taskText}
          onChange={handleInputChange}
        />
        <button onClick={addTask} className="add-button">Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <div className="task-card">
              <span className={task.completed ? 'completed-text' : ''}>{task.text}</span>
              <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
              <button onClick={() => markAsDone(index)} className="done-button">
                {task.completed ? 'Undo' : 'Done'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
