import React from "react";
import { StyledHeader } from "../Styled/StyledHeader";
import { StyledHeaderForeground } from "../Styled/StyledHeaderForeground";
import { StyledHeaderVideoBackground } from "../Styled/StyledHeaderVideoBackground";
import { StyledH1 } from "../Styled/StyledH1"
import { StyledH2 } from "../Styled/StyledH2"
import { StyledH3 } from "../Styled/StyledH3";

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderForeground>
          <StyledH1>AUDI</StyledH1>
          <StyledH2>quattro</StyledH2>
      </StyledHeaderForeground>
      <StyledHeaderVideoBackground>
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          height="100%"
          src="https://www.youtube.com/embed/xr_reKgerJM?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&loop=1&playlist=xr_reKgerJM"
          width="100%"
        ></iframe>
      </StyledHeaderVideoBackground>
    </StyledHeader>
  );
}
