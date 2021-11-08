import React from "react";
import { DiFirebase, DiReact, DiPython } from "react-icons/di";

import { RiBitCoinLine, RiCodeLine } from "react-icons/ri";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the development world: from
      Algorithmic Trading, Artificial intelligence, Back-end, Front-end, and
      smart contracts.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" color="#9e16e2" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" color="#9e16e2" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RiBitCoinLine size="3rem" color="#9e16e2" />
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Experience with <br />
            Cardano Block-Chain smart contracts
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" color="#9e16e2" />
        </picture>
        <ListContainer>
          <ListTitle>Algoritmic Trading and AI</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python libraries like Pandas and TensorFlow.
            <br />
            Experience with APIs of centralized exchanges like Binance, Kucoin,
            Crypto.Com
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <RiCodeLine size="3rem" color="#9e16e2" />
        </picture>
        <ListContainer>
          <ListTitle>Programming languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, JavaScript and Haskell.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
