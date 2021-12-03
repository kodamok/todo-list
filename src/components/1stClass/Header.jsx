import React from "react";
import todo2 from "../../assets/todo2.png";
import styled from 'styled-components'


const HeaderContainer = styled.header`
border: 2px solid red;
`

const Header = () => {
  return (
    <HeaderContainer>
      <div className="title">To Do List</div>
      <div className="logo">
        <img src={todo2} alt="logo" />
      
      </div>
      
    </HeaderContainer>
  );
};

export default Header;
