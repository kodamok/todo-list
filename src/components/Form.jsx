import React from "react";

import { v4 as uuid } from "uuid";

const Form = ({ task, setTask, handleSubmit, inputRef }) => {
  return (
    <form className="form">
      <label className="taskName">- Enter task - </label>
      <input
        type="text"
        value={task.task}
        maxLength="100"
        onChange={(e) =>
          setTask({ id: uuid(), task: e.target.value, done: false })
        }
        ref={inputRef}
        
      />
      <button className="buttonAdd"onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default Form;
