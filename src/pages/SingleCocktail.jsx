import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { Cocktail } from "../components/Cocktail";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  flex-grow: 1;
`;

export const SingleCocktail = () => {
  const { cocktailId } = useParams();
  const [cocktailData, setCocktailData] = useState({});

  useEffect(() => {
    const getCocktailData = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
        );
        setCocktailData(response.data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getCocktailData();
  }, []);

  const ingredients = Object.values(cocktailData).filter(
    (value, index) => index >= 17 && index <= 31 && value !== null
  );

  const ingredientMeasures = Object.values(cocktailData).filter(
    (value, index) => index >= 32 && index <= 46 && value !== null
  );

  const combinedIngredients = [];

  for (let i = 0; i < ingredients.length; i++) {
    const amount = ingredientMeasures[i] || "";
    const ingredientObj = {
      name: ingredients[i],
      amount: `${amount} ${ingredients[i]}`,
    };
    combinedIngredients.push(ingredientObj);
  }

  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Cocktail
          picture={cocktailData.strDrinkThumb}
          name={cocktailData.strDrink}
          type={cocktailData.strAlcoholic}
          instruction={cocktailData.strInstructions}
          ingredients={combinedIngredients}
        />
      </Wrapper>
      <Footer />
    </Container>
  );
};
