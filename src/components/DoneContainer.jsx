import "../App.css";

import React from "react";
import Done from "./Done";

const DoneContainer = ({ taskDone , handleDelete, handleTick }) => {
  return (
    <aside className="doneContainer">
        
      {taskDone.length > 0 ? (
        taskDone.map((element) => (
          <Done
            key={element.id}
            element={element}
            handleDelete={handleDelete}
            handleTick={handleTick}
            taskDone={taskDone}
          />
        ))
      ) : (
        <h2 className="noTaskMsg">NO COMPLETED TASKS </h2>
      )}
    </aside>
  );
};

export default DoneContainer;
