import React from "react";
import styled from "styled-components";
import { orangeColor } from "../../variables";
import Reverend from "../assets/reverend.jpeg";

const Container = styled.div`
  max-width: 1920px;
  text-align: center;
  margin: 40px auto 100px;
  height: fit-content;
  position: relative;
  z-index: -1;
`;

const Image = styled.img`
  border-radius: 50%;
  border: 7px solid ${orangeColor};
  width: 200px;
  position: absolute;
  top: 50%;
  transform: translate(22%, 28%);

  @media (max-width: 550px) {
    width: 150px;
  }

  @media (max-width: 420px) {
    width: 100px;
  }
`;

const Text = styled.p`
  border: 2px solid ${orangeColor};
  border-radius: 50%;
  padding: 30px;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  margin: 0 auto;

  @media (max-width: 550px) {
    width: 200px;
    height: 200px;
    font-size: 0.8rem;
  }

  @media (max-width: 420px) {
    width: 130px;
    height: 130px;
    font-size: 0.6rem;
  }
`;

const Author = styled.p`
  width: fit-content;
  background-color: ${orangeColor};
  padding: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-77%, -68%);

  @media (max-width: 550px) {
    font-size: 0.8rem;
  }

  @media (max-width: 420px) {
    font-size: 0.6rem;
  }
`;

export const Quote = () => {
  return (
    <Container>
      <Image src={Reverend} />
      <Text>
        “Hey, buddy do you got the time?
        <br />
        No I don't got a watch can you spare a dime,
        <br />
        But I got two olives and a couple of limes,
        <br />
        Guessin' that means it's martini time”.
      </Text>
      <Author>
        The Reverend Horton Heat
        <br />
        <span style={{ color: "#030202" }}>"It's Martini Time"</span>
      </Author>
    </Container>
  );
};
