import React, { useRef, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  NumberList,
  Current,
  SliderContainer,
  SlideWrapper,
  LinkWrap,
  Overlay,
  ContentWrap,
  CaseTitle,
  Button,
  SlickSwitch,
  Section,
  Spanner,
  Subtitle,
  HomeLink,
  TextLink
} from "../styles/Work.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = ({ history }) => {
  const [carouselSet, setCarousel] = useState(false);
  const [currentSlide, setSlide] = useState(1);
  const [animateHome, setAnimeHome] = useState(false);
  const [toCase, setCase] = useState("");
  const [coord, setCoords] = useState();
  const carousel = useRef(null);

  useEffect(() => {
    animateHome &&
      setTimeout(() => {
        history.push("/");
      }, 400);
  }, [animateHome, history]);

  useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 1000);
  }, [toCase, history]);

  if (!carouselSet) {
    setCarousel(true);
  }

  const settings = {
    accessibility: true,
    arrows: false,
    dots: false,
    draggable: true,
    swipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (old, next) => setSlide(next + 1)
  };

  const PreviousIcon = require("../assets/icons/left-arrow.png");
  const NextIcon = require("../assets/icons/right-arrow.png");

  const CaseOne = require("../assets/cases/andela.jpg");
  const CaseTwo = require("../assets/cases/prodperfect.jpg");
  const CaseThree = require("../assets/cases/sondermind.jpg");
  const CaseFour = require("../assets/cases/wundercar.jpg");

  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri);

  return (
    <>
      <Wrapper>
        <HomeLink onClick={() => setAnimeHome(true)} animating={animateHome}>
          <TextLink>Home</TextLink>
        </HomeLink>
        <Section>
          <SliderContainer {...settings} ref={carousel} toCase={!!toCase}>
            <div>
              <SlideWrapper color="black">
                <LinkWrap coverImage={CaseOne} active={toCase === "/case"}>
                  <Overlay>
                    <ContentWrap>
                      <CaseTitle>
                        Andela
                      </CaseTitle>
                      <Subtitle>Software Engineer</Subtitle>
                      <Subtitle>Nairobi, Kenya</Subtitle>
                      <Subtitle>2017-Present</Subtitle>
                      <br />
                      <p>
                        Entered Andela through its fellowship program.
                        Worked on a few internal apps as part of my training.
                        Professionally worked on an application that helped automate processes involved with the
                        placement of Andela Engineers on their roles with Andela partners. The app was called
                        Engagement Support Automation(ESA). I was part of the founding team.
                      </p>
                      <br />
                      <p>
                        On ESA I was primarily a backend engineer working with Node, Express & Postgres
                        As part of the ESA’s original team, I was involved in planning the the project from its
                        inception and make decisions on the tools to be used.
                        On ESA I Integrated other services and APIs in the application like Slack, Gmail, BambooHR
                        & other Andela applications.
                        On ESA I gained some knowledge in AWS as I helped debug deployment issues.
                      </p>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseTwo}>
                  <Overlay>
                    <ContentWrap>
                      <CaseTitle>
                        ProdPerfect Inc
                      </CaseTitle>
                      <Subtitle>QA and Software Engineer</Subtitle>
                      <Subtitle>Massachusetts , United States</Subtitle>
                      <Subtitle>2019-2020</Subtitle>
                      <br />
                      <p>
                        ProdPerfect's work involved building e2e test suites for various clients.
                      </p>
                      <br />
                      <p>
                        My role was as a QA Engineer with some software development duties. I wrote multiple extensive
                        e2e tests for various multiple clients, updating them when UI changes necessitated them.
                        I worked on the tools that would automate the generation of basic e2e tests in JS.
                        I wrote bug reports when failing tests indicated the bug.
                      </p>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseThree}>
                  <Overlay>
                    <ContentWrap>
                      <CaseTitle>
                        SonderMind Inc
                      </CaseTitle>
                      <Subtitle>Software Engineer</Subtitle>
                      <Subtitle>Colorado , United States</Subtitle>
                      <Subtitle>2019</Subtitle>
                      <br />
                      <p>
                        Sondermind business involved matching mental health workers like psychologists with
                        potential clients.
                      </p>
                      <br />
                      <p>
                        My role involved moving their admin portal from Ruby on Rails to Angular. The Angular
                        admin portal would be a stand-alone application contained in a mono-repo of other Angular
                        apps
                      </p>
                      <br />
                      <p>
                        I built multiple reusable components, services that interacted with the API and built
                        multi-purpose directives. I also learnt BEM CSS styling methodology
                      </p>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseFour}>
                  <Overlay>
                    <ContentWrap>
                      <CaseTitle>
                        WunderCar Mobility Solutions GmbH
                      </CaseTitle>
                      <Subtitle>Software Engineer</Subtitle>
                      <Subtitle>Hamburg , Germany</Subtitle>
                      <Subtitle>2018</Subtitle>
                      <br />
                      <p>
                        WunderCar was developing a platform where employers would acquire morning & evening
                        commutes for their employees.
                      </p>
                      <br />
                      <p>
                        Worked as a full-stack engineer and managed to attain a microservices certification from Lightbend.
                        I was able to setup multiple multiple server applications with Node/Typescript/Koa/Postgres to
                        house the different microservices. We used Kafka for communication between the microservices.
                        I mostly worked on Driver service meant to inform drivers where to pick up passengers.
                      </p>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
          </SliderContainer>
          <NumberList navigating={!!toCase}>
            <SlickSwitch onClick={() => carousel.current.slickPrev()}>
              <Button src={PreviousIcon} alt="Previous case" />
            </SlickSwitch>
            <Current>
              <p>0{currentSlide} / 04</p>
            </Current>
            <SlickSwitch onClick={() => carousel.current.slickNext()}>
              <Button src={NextIcon} alt="Next case" />
            </SlickSwitch>
          </NumberList>
        </Section>
      </Wrapper>
    </>
  );
};

export default withRouter(Work);
