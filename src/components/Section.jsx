import React from "react";
import TaskContainer from "./TaskContainer";

import DoneContainer from "./DoneContainer";

const Section = ({ tasksArray, handleDelete, handleTick, taskDone }) => {
  return (
    <section className="section">
      <TaskContainer
        tasksArray={tasksArray}
        handleDelete={handleDelete}
        handleTick={handleTick}
        taskDone={taskDone}
      />

      <DoneContainer
        handleDelete={handleDelete}
        handleTick={handleTick}
        taskDone={taskDone}
      />
    </section>
  );
};

export default Section;
