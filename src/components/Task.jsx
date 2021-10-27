import "../App.css";
import { TiTick } from "react-icons/ti";
import React from "react";

import bin1 from "../assets/bin1.png";
import openbin from "../assets/openbin.png";
import remove1 from "../assets/remove1.png";

const Task = ({ element, handleDelete, handleTick, tasksArray }) => {
  return (
    <div className="taskDisplay">
      <div className="tick">
        <TiTick
          style={{
            fontSize: "22px",
          }}
          onClick={() => handleTick(element.id, tasksArray)} //Handle the tick functionality
        />
      </div>

      <div className="task">
        <p>{element.task}</p>
      </div>
      <img
        onClick={() => handleDelete(element.id, tasksArray)}
        onMouseLeave={(e) => (e.currentTarget.src = bin1)}
        onMouseEnter={(e) => (e.currentTarget.src = openbin)}
        className="bin"
        src={bin1}
        alt="bin"
      />
      <img
        onClick={() => handleTick(element.id, tasksArray)}
        className="bin"
        src={remove1}
        alt="bin"
      />
    </div>
  );
};

export default Task;
