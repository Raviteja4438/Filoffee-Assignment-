import React, { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add or Update Task
  const handleSaveTask = (task) => {
    if (editTask) {
      setTasks(tasks.map((t) => (t.id === editTask.id ? task : t)));
      setEditTask(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
  };

  // Delete Task
  const handleDeleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Task Tracker</h1>
      <TaskForm onSave={handleSaveTask} editTask={editTask} />
      <TaskList
        tasks={tasks}
        onEdit={setEditTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App
