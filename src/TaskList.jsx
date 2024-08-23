import { useState } from 'react';

/* eslint-disable react/prop-types */
export default function TaskList({tasks, onDeleteTask, onSaveTask}) {
  return (
    <ul>
      {tasks.map((t) => (
        <Task
          onDelete={onDeleteTask}
          onSave={onSaveTask}
          key={t.id}
          task={t}>
        </Task> 
      ))}
    </ul>
  );
};


function Task({task, onDelete, onSave}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputVal, setInputVal] = useState(task.text);

  const onEdit = () => setIsEditing(true);

  const handleSave = () => {
    onSave({
      ...task,
      text: inputVal,
    });
    setIsEditing(false);
  }

  return (
    <li>
      { isEditing ? (
          <>
            <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            {task.text}
            <button onClick={onEdit}>Edit</button>
          </>
        )
      }
      
      
      <button onClick={() => onDelete(task)}>&#10005;</button>
    </li>
  );
};