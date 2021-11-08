import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! ... I am Alicia <br /> Let's do awesome things!
      </SectionTitle>
      <SectionText>
        Blockchain and Artificial intelligence Technologies are changing the
        world. Let's collaborate in this change.
      </SectionText>

      {/* <img src={"/images/profile.png"} alt="Avatar" /> */}
      <Button
        onClick={() => (window.location = "mailto:aliciabasilo.ab@gmail.com")}
      >
        Contact me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
