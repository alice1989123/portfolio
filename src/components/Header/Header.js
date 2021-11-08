import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineIdcard,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
AiOutlineIdcard;

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "#0b0110" }}>
          <AiOutlineIdcard size="4rem" /> <Span> Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/alice1989123">
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/jazm%C3%ADn-alicia-basilio-vel%C3%A1zquez-aa9804205/">
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/AlicieBasilio">
        <AiFillTwitterCircle size="4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
