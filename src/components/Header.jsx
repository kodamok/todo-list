import React from "react";

import todo2 from "../assets/todo2.png";
import Form from "./Form";


const Header = () => {
  return (
    <header>
      <div className="title">To Do List</div>
      <div className="logo">
        <img src={todo2} alt="logo" />
        <Form/>
      </div>
      
    </header>
  );
};

export default Header;
