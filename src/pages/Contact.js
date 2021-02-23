import React, { useState, useEffect } from "react";
import { Wrapper, Container, Header } from "../styles/Contact.styles";
import { HomeLink, TextLink } from "../styles/Work.styles";
import {
  SocialContainer,
} from "../styles/Navigation.styles";
import { SocialItem } from "../styles/Navigation.styles";
import {
  Twitter,
  Github,
  LinkedIn
} from "../components/Socials";
import { withRouter } from "react-router";

const Contact = ({ history }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    animate &&
      setTimeout(() => {
        history.push("/");
        setAnimate(false);
      }, 400);
  }, [animate, history]);

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimate(true)} animating={animate}>
        <TextLink>Home</TextLink>
      </HomeLink>
      <Container>
        <Header>machariamarigi@gmail.com</Header>
        <Header>+254 (0) 723 834044</Header>

      </Container>
        <SocialContainer open={true}>
          <SocialItem>
            <Twitter />
          </SocialItem>
          <SocialItem>
            <LinkedIn />
          </SocialItem>
          <SocialItem>
            <Github />
          </SocialItem>
        </SocialContainer>
    </Wrapper>
  );
};

export default withRouter(Contact);
