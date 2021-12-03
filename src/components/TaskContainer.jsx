import "../App.css";

import React, { useContext } from "react";
import Task from "./Task";
import MyContext from "../context/MyContext";

const TaskContainer = () => {

  const context = useContext(MyContext)
  const {tasksArray} = context


  return (
    <aside className="taskContainer">
      {tasksArray.length > 0 ? (
        tasksArray.map((element) => (
          <Task
            key={element.id}
            element={element}
          />
        ))
      ) : (
        <h2 className="noTaskMsg">NO TASKS </h2>
      )}
    </aside>
  );
};

export default TaskContainer;
