import styled from "styled-components"

export const NavBarStyled = styled.nav`
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  justify-content:space-evenly;
  align-items:center;
  color:white;
  z-index:3;
  background:#011C25;
  .NavUL{
    display:flex ;
    margin:auto 0px;
    &-Links{
      font-weight:600;
      margin:0px 20px;
      cursor:pointer;
    }
  }
`
