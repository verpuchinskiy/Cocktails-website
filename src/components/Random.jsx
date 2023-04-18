import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { headerFont } from "../../variables";
import { orangeColor } from "../../variables";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 1920px;
  margin: 20px auto;
  padding: 0 40px;

  /* @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;

const Header = styled.h2`
  font-family: ${headerFont};
  font-size: 2.5rem;
  margin: 60px 0 40px;

  @media (max-width: 850px) {
    font-size: 1.5rem;
  }
`;

const CocktailRow = styled.div`
  max-width: 1920px;
  margin: 20px auto;
  padding: 0 40px;
  display: flex;
  gap: 40px;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  text-align: center;
`;

const LeftImg = styled.img`
  max-width: 100%;
  max-height: 350px;
  border-radius: 40% 10% 40% 10%;
  margin-bottom: 20px;
  box-shadow: -2px 2px 0 ${orangeColor};
`;

const Center = styled.div`
  flex: 0.8;
  text-align: center;

  @media (max-width: 960px) {
    flex: 1;
  }
`;

const CenterImg = styled.img`
  max-width: 100%;
  min-height: calc(100% - 48px);
  max-height: 350px;
  object-fit: cover;
  border-radius: 30% 30% 10% 30%;
  margin-bottom: 20px;
  box-shadow: 0 2px 0 ${orangeColor};

  @media (max-width: 960px) {
    min-height: 50px;
  }
`;

const Right = styled.div`
  flex: 1;
  text-align: center;
`;

const RightImg = styled.img`
  max-width: 100%;
  max-height: 350px;
  border-radius: 10% 40% 10% 40%;
  margin-bottom: 20px;
  box-shadow: 2px -2px 0 ${orangeColor};
`;

const CocktailName = styled.h3`
  font-weight: 400;
  color: ${orangeColor};
`;

const CocktailLink = styled(Link)`
  text-decoration: none;
`;

export const Popular = () => {
  const [cocktail1, setCocktail1] = useState({});
  const [cocktail2, setCocktail2] = useState({});
  const [cocktail3, setCocktail3] = useState({});

  const getRandomCocktail = async () => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      return response.data.drinks[0];
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getPopularCocktails = async () => {
      const cocktail1 = await getRandomCocktail();
      const cocktail2 = await getRandomCocktail();
      const cocktail3 = await getRandomCocktail();
      setCocktail1(cocktail1);
      setCocktail2(cocktail2);
      setCocktail3(cocktail3);
    };

    getPopularCocktails();
  }, []);

  return (
    <Container>
      <Header>Random Cocktails</Header>
      <CocktailRow>
        <Left>
          <CocktailLink to={`/cocktails/${cocktail1.idDrink}`}>
            <LeftImg src={cocktail1.strDrinkThumb} />
            <CocktailName>{cocktail1.strDrink}</CocktailName>
          </CocktailLink>
        </Left>
        <Center>
          <CocktailLink to={`/cocktails/${cocktail2.idDrink}`}>
            <CenterImg src={cocktail2.strDrinkThumb} />
            <CocktailName>{cocktail2.strDrink}</CocktailName>
          </CocktailLink>
        </Center>
        <Right>
          <CocktailLink to={`/cocktails/${cocktail3.idDrink}`}>
            <RightImg src={cocktail3.strDrinkThumb} />
            <CocktailName>{cocktail3.strDrink}</CocktailName>
          </CocktailLink>
        </Right>
      </CocktailRow>
    </Container>
  );
};
