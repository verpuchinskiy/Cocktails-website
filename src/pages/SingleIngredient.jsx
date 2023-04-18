import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Ingredient } from "../components/Ingredient";
import { Navbar } from "../components/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  flex-grow: 1;
`;

export const SingleIngredient = () => {
  const { ingredientName } = useParams();
  const [ingredient, setIngredient] = useState();

  useEffect(() => {
    const getIngredientData = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`
      );
      setIngredient(response.data.ingredients[0]);
    };

    getIngredientData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Ingredient name={ingredientName} ingredient={ingredient} />
      </Wrapper>
      <Footer />
    </Container>
  );
};
