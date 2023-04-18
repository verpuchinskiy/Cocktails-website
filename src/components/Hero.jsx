import React from "react";
import styled from "styled-components";
import { headerFont, orangeColor } from "../../variables";
import HeroImage from "../assets/cocktails-hero.jpg";

const Container = styled.div`
  margin-top: 112px;
  height: 70vh;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),
    url("src/assets/bg.jpg") top center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 730px) {
    margin-top: 88px;
    height: 60vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 1920px;
  padding: 0 40px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid white;
  /* border: 1px solid white; */

  @media (max-width: 730px) {
    border: none;
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 730px) {
    flex: 0;
  }
`;

const HeroImg = styled.img`
  border-radius: 10% 48% 48% 10%;
  box-shadow: 3px -3px 0 ${orangeColor};
  height: auto;
  max-width: 500px;

  @media (max-width: 1580px) {
    max-width: 400px;
  }

  @media (max-width: 1030px) {
    max-width: 300px;
  }

  @media (max-width: 850px) {
    max-width: 220px;
  }

  @media (max-width: 730px) {
    display: none;
  }
`;

const MainHeader = styled.h1`
  font-family: ${headerFont};
  font-size: 8rem;
  font-weight: 400;
  background-color: transparent;
  /* margin: 0 auto; */
  padding-right: 20px;

  @media (max-width: 1580px) {
    font-size: 6rem;
  }

  @media (max-width: 1210px) {
    font-size: 5rem;
  }

  @media (max-width: 1030px) {
    font-size: 4rem;
  }

  @media (max-width: 850px) {
    font-size: 3rem;
  }

  @media (max-width: 730px) {
    display: none;
  }
`;

const MainHeaderMobile = styled.h1`
  font-family: ${headerFont};
  font-size: 3rem;
  font-weight: 400;
  background-color: transparent;
  margin: 0 auto;
  padding-right: 20px;

  @media (min-width: 731px) {
    display: none;
  }

  @media (max-width: 730px) {
    text-align: center;
  }
`;

const Tagline = styled.h2`
  font-weight: 600;
  margin-top: 20px;
  font-style: italic;
  /* margin-left: -120px; */

  @media (max-width: 1580px) {
    font-size: 1.15rem;
  }

  @media (max-width: 1210px) {
    font-size: 1rem;
  }

  @media (max-width: 1030px) {
    font-size: 0.8rem;
  }

  @media (max-width: 850px) {
    font-size: 0.7rem;
    padding-right: 20px;
  }

  @media (max-width: 730px) {
    margin: 20px auto;
  }

  @media (max-width: 390px) {
    text-align: center;
  }
`;

export const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MainHeader>
            mind your
            <br /> Best cocktail
          </MainHeader>
          <MainHeaderMobile>Find Your Best Cocktail</MainHeaderMobile>
          <Tagline>
            The most complete resourse for cocktail inspiration{" "}
          </Tagline>
        </Left>
        <Right>
          <HeroImg src={HeroImage} />
        </Right>
      </Wrapper>
    </Container>
  );
};
