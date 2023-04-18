import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import styled from "styled-components";
import { darkColor, lightColor, orangeColor } from "../../variables";
import { CocktailsList } from "../components/CocktailsList";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Container = styled.div`
  max-width: 1920px;
  padding: 0 40px;
  margin: 132px auto 0;
  height: 100%;
`;

const AlcoholicLine = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
`;

const AlcoholicBtn = styled.span`
  width: 80px;
  height: 80px;
  border: 1px solid ${orangeColor};
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected && `background-color: ${orangeColor}; color: ${lightColor}`}
`;

export const Alcoholic = () => {
  const [chosenType, setChosenType] = useState(
    sessionStorage.getItem("cocktailType") || "Alcoholic"
  );
  const [isTypeSelected, setIsTypeSelected] = useState(
    sessionStorage.getItem("cocktailType") || "Alcoholic"
  );
  const [cocktailsArray, setCocktailsArray] = useState([]);

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${chosenType}`
        );
        if (response.data.drinks !== undefined) {
          setCocktailsArray(response.data.drinks);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCocktails();
  }, [chosenType]);

  const handleTypeClick = (event) => {
    const text = event.target.getAttribute("name");
    setIsTypeSelected(text);
    setChosenType(text === "Alcoholic" ? "Alcoholic" : "Non_Alcoholic");
    sessionStorage.setItem("cocktailType", text);
  };

  return (
    <Container>
      <Navbar />
      <AlcoholicLine>
        <AlcoholicBtn
          onClick={handleTypeClick}
          isSelected={isTypeSelected === "Alcoholic"}
          name="Alcoholic"
        >
          Alcoholic
        </AlcoholicBtn>
        <AlcoholicBtn
          onClick={handleTypeClick}
          isSelected={isTypeSelected === "Non_Alcoholic"}
          name="Non_Alcoholic"
        >
          Non-alcoholic
        </AlcoholicBtn>
      </AlcoholicLine>
      {cocktailsArray ? (
        <CocktailsList cocktailsArray={cocktailsArray} />
      ) : (
        <p style={{ textAlign: "center" }}>Please choose the cocktail type</p>
      )}
      <Footer />
    </Container>
  );
};
