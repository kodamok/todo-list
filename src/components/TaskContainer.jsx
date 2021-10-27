import "../App.css";

import React from "react";
import Task from "./Task";

const TaskContainer = ({ tasksArray, handleDelete, handleTick }) => {
  return (
    <aside className="taskContainer">
      {tasksArray.length > 0 ? (
        tasksArray.map((element) => (
          <Task
            key={element.id}
            element={element}
            handleDelete={handleDelete}
            handleTick={handleTick}
            tasksArray={tasksArray}
          />
        ))
      ) : (
        <h2 className="noTaskMsg">NO TASKS </h2>
      )}
    </aside>
  );
};

export default TaskContainer;
