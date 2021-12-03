import React from "react";
import TaskContainer from "./TaskContainer";

import DoneContainer from "./DoneContainer";

const Section = () => {
  return (
    <section className="section">
      <TaskContainer/>

      <DoneContainer/>
    </section>
  );
};

export default Section;
