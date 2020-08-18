import React from "react";
import { StyledSection } from "../Styled/StyledSection";
import { StyledQuattroPng } from "../Styled/StyledQauttroPng";
import quattro from "../images/quattro.png";

export default function TheMachine() {
  return (
    <>
      <StyledSection>
        <StyledQuattroPng src={quattro} />
      </StyledSection>
    </>
  );
}
