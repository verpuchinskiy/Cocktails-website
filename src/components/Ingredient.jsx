import React from "react";
import styled from "styled-components";
import { headerFont, orangeColor } from "../../variables";

const Container = styled.div`
  max-width: 1920px;
  padding: 0 40px;
  margin: 132px auto 0;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
`;

const IngredientImg = styled.img`
  max-width: 60%;
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

const Description = styled.div``;

export const Ingredient = ({ name, ingredient }) => {
  if (!ingredient) {
    return <div>Loading...</div>;
  }

  const formattedDescription = ingredient.strDescription
    ?.split(/\r\n\r/g)
    .map((paragraph, index) => {
      return (
        <>
          <p key={index}>{paragraph}</p>
          <br />
        </>
      );
    });

  return (
    <Container>
      <Left>
        <IngredientImg
          src={`https://www.thecocktaildb.com/images/ingredients/${name}.png`}
        />
      </Left>
      <Right>
        <Header>{ingredient.strIngredient}</Header>
        {ingredient.strType && (
          <Type>
            <span style={{ color: "gray" }}>Ingredient type: </span>
            {ingredient.strType}
          </Type>
        )}
        {formattedDescription ? (
          <Description>{formattedDescription}</Description>
        ) : (
          <p>No description available.</p>
        )}
      </Right>
    </Container>
  );
};
