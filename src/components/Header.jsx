import React from "react";

import todo2 from "../assets/todo2.png";
import Form from "./Form";


const Header = ({task, setTask, handleSubmit, inputRef}) => {
  return (
    <header>
      <div className="title">To Do List</div>
      <div className="logo">
        <img src={todo2} alt="logo" />
        <Form handleSubmit={handleSubmit} task={task} setTask={setTask} inputRef={inputRef}/>
      </div>
      
    </header>
  );
};

export default Header;
