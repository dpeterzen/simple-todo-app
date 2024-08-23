import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function AddTask({ onAddTask }) {
  const [inputVal, setInputVal] = useState('');

  return (
    <>
      <input
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
        placeholder="Add Task" />
      <button onClick={() => onAddTask(inputVal)}>Add</button>
    </>
  );
}

export default AddTask;
