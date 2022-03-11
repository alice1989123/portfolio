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
      <div style={{ display: "flex" }}>
        <img style={{ width: 250 }} src={"/images/profile1.png"} alt="Avatar" />

        <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
          <Button
            onClick={() =>
              (window.location = "mailto:aliciabasilo.ab@gmail.com")
            }
          >
            Contact me
          </Button>
        </div>
      </div>
    </LeftSection>
  </Section>
);

export default Hero;
