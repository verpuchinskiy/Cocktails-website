import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { headerFont, lightColor, orangeColor } from "../../variables";

const Container = styled.div`
  max-width: 1920px;
  padding: 0 40px;
  margin: 132px auto 0;
  display: flex;
  justify-content: center;

  @media (max-width: 830px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
`;

const CocktailImg = styled.img`
  max-width: 60%;
  border-radius: 40% 40% 10% 10%;
  box-shadow: 2px 2px 0 ${orangeColor};
`;

const Header = styled.h2`
  font-family: ${headerFont};
  font-size: 2rem;
  color: ${orangeColor};
  margin-bottom: 20px;
`;

const Type = styled.div`
  margin-bottom: 20px;
`;

const IngredientsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
`;

const SingleIngredient = styled.div`
  border: 1px solid ${lightColor};
  padding: 10px 14px;
  border-radius: 20px;
`;

const Instruction = styled.div``;

export const Cocktail = ({ name, picture, type, instruction, ingredients }) => {
  return (
    <Container>
      <Left>
        <CocktailImg src={picture} />
      </Left>
      <Right>
        <Header>{name}</Header>
        <Type>
          <span style={{ color: "gray" }}>Cocktail type: </span>
          {type}
        </Type>
        <IngredientsList>
          {ingredients.map((ingredient) => (
            <Link
              to={`/cocktails/ingredients/${ingredient.name}`}
              style={{ textDecoration: "none" }}
              key={ingredient.name}
            >
              <SingleIngredient key={ingredient.name}>
                {ingredient.amount}
              </SingleIngredient>
            </Link>
          ))}
        </IngredientsList>
        <Instruction>{instruction}</Instruction>
      </Right>
    </Container>
  );
};
