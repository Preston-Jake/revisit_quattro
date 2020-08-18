import React from "react";
import { useLayoutEffect, useState } from "react";
import logo from "../images/logo.png";
import { StyledLi } from "../Styled/StyledLi";
import { StyledLogo } from "../Styled/StyledLogo";
import { StyledNav } from "../Styled/StyledNav";
import { StyledUl } from "../Styled/StyledUl";
import { StyledA } from "../Styled/StyledA";
import { StyledTitle } from "../Styled/StyledTitle";

export default function Nav() {
  const [visibility, setVisibility] = useState("");

  useLayoutEffect(() => {
    window.addEventListener("scroll",
      (e) => {
       if(window.scrollY > 100) setVisibility("hidden")
       if(window.scrollY < 100) setVisibility("")
      });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <StyledNav visibility={visibility}>
      <StyledLogo src={logo} alt="" />
      <StyledTitle>Team Audi</StyledTitle>
      <StyledUl>
        <StyledLi>
          <StyledA href="default.asp">HOME</StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA href="news.asp">NEWS</StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA href="contact.asp">CONTACT</StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA href="about.asp">ABOUT</StyledA>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}
