import styled from "styled-components";

export const StyledNav = styled.nav`
  visibility : ${props => props.visibility || "visible"};
  background-color: #fff;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  grid-template-rows: 1fr;
  height: 81px;
  margin: 0px;
  overflow: hidden;
  padding: 4px;
  position: fixed;
  transition: ease-in 300ms;
  width: 100%;
`;
