import "../App.css";
import {BiArrowBack} from "react-icons/bi";
import React  from "react";

import bin1 from "../assets/bin1.png";
import openbin from "../assets/openbin.png";
import remove1 from "../assets/remove1.png";

const Done = ({ element, handleDelete, handleTick, taskDone }) => {
  return (
    <div className="taskDisplay">
      <div className="tick">
        <BiArrowBack
          style={{
            fontSize: "22px",
          }}
          onClick={() => handleTick(element.id, taskDone)} //Handle the tick functionality
        />
      </div>

      <div className="task">
        <p className="doneTask">{element.task}</p>
      </div>
      <img
        onClick={() => handleDelete(element.id, taskDone)}
        onMouseLeave={(e) => (e.currentTarget.src = bin1)}
        onMouseEnter={(e) => (e.currentTarget.src = openbin)}
        className="bin"
        src={bin1}
        alt="bin"
      />
      <img
        onClick={() =>handleTick(element.id, taskDone)}
        className="bin"
        src={remove1}
        alt="bin"
      />
    </div>
  );
};

export default Done;
