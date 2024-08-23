import { useState, useReducer } from 'react';
import './App.css';
import TaskList from './TaskList';
import AddTask from './AddTask';


function TaskApp() {

  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  
  const handleAddTask = (text) => {
    dispatch({
      type: 'added',
      text: text,
    })
  };

  const handleDeleteTask = (task) => {
    dispatch({
      type: 'deleted',
      task: task,
    })
  };

  const handleSaveTask = (task) => {
    dispatch({
      type: 'saved',
      task: task,
    })
  };

  return (
    <>
      <h2>Todo List</h2>
      <AddTask onAddTask={handleAddTask}></AddTask>
      <TaskList
        onDeleteTask={handleDeleteTask}
        onSaveTask={handleSaveTask}
        tasks={tasks}>
      </TaskList>
    </>
  );
}

export default TaskApp

function taskReducer(tasks, action) {
  switch (action.type) {
    case 'added':
      return [
        ...tasks,
        {
          text: action.text,
          done: false,
          id: nextId++,
        }
      ];
    case 'saved':
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case 'deleted':
      return tasks.filter((t) => t.id !== action.task.id);
    default:
      throw Error('action not known');
  }
}

const initialTasks = [
  {text: "buy bananas", done: false, id: 0},
  {text: "wash dog", done: false, id: 1},
]
let nextId = initialTasks.length; 
