import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CocktailsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

const SingleCocktail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CocktailImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const CocktailName = styled.h3`
  font-weight: 400;
  width: 200px;
  text-align: center;
`;

export const CocktailsList = ({ cocktailsArray }) => {
  return (
    <CocktailsListWrapper>
      {cocktailsArray.map((cocktail) => (
        <Link
          to={`/${cocktail.idDrink}`}
          style={{ textDecoration: "none" }}
          key={cocktail.idDrink}
        >
          <SingleCocktail key={cocktail.idDrink}>
            <CocktailImg src={cocktail.strDrinkThumb} />
            <CocktailName>{cocktail.strDrink}</CocktailName>
          </SingleCocktail>
        </Link>
      ))}
    </CocktailsListWrapper>
  );
};
