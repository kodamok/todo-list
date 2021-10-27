import "../App.css";

import React, { useContext } from "react";
import Done from "./Done";
import MyContext from "../context/MyContext";

const DoneContainer = () => {

  const context = useContext(MyContext)
  const {taskDone} = context



  return (
    <aside className="doneContainer">
        
      {taskDone.length > 0 ? (
        taskDone.map((element) => (
          <Done
            key={element.id}
            element={element}
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
