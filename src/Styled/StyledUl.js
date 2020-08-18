import styled from "styled-components";

export const StyledUl = styled.ul`
  align-items: center;
  display: grid;
  grid-area: 1 / 4 / 2 / 5;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  list-style-type: none;
  margin: 0;
  margin-right:4rem;
  overflow: hidden;
  padding: 8px;
`;
