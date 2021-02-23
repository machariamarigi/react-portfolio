import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  Heading,
  Subtitle,
  X,
  Article,
  ExperienceContainer,
  ExperienceTitle,
  DetailBlock,
  DetailPoint,
  Image,
  WorkLink,
  TextLink,
  HomeLink,
  HomeText,
  Hero,
  Body,
  ImageBackground,
  Overlay,
  Container,
  RoleTime,
  Role,
  Time,
  Client
} from "../styles/About.styles";

const About = ({ history }) => {
  const [animateWork, setAnimateWork] = useState(false);
  const [animateHome, setAnimateHome] = useState(false);

  useEffect(() => {
    animateWork &&
      setTimeout(() => {
        setAnimateWork(false);
        history.push("/work");
      }, 400);
    animateHome &&
      setTimeout(() => {
        setAnimateHome(false);
        history.push("/");
      }, 400);
  }, [animateWork, animateHome, history]);

  const about = require("../assets/images/about.jpg");

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimateHome(true)} animating={animateHome}>
        <HomeText>Home</HomeText>
      </HomeLink>
      <Body>
        <ImageBackground backgroundImage={about}>
          <Overlay />
        </ImageBackground>
        <Container>
          <Hero>
            <Heading>Who am I?</Heading>
            <Subtitle>
              Hi, I am an enthusiastic <X>Software Engineer</X> and I've been actively building software for around 4
              years. I am a full stack developer and I have no trouble working on either the backend or frontend.
              I've worked mostly with <X>Javascript</X> and I am extremely agnostic when it comes to JS
              libraries/frameworks. I have also worked with <X>Python, PHP and Go</X>. I have a strong interest in building 
              business management applications and e-commerce applications. My technical interests are microservices
              and artificial intelligence.I hope I get the chance to <X>grow</X> with{" "}
              <X>you</X>!
            </Subtitle>
          </Hero>
        </Container>
      </Body>
      <WorkLink onClick={() => setAnimateWork(true)} animating={animateWork}>
        <TextLink>Take a look at some of my work!</TextLink>
      </WorkLink>
    </Wrapper>
  );
};

export default withRouter(About);
