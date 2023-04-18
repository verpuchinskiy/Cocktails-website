import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import { headerFont, orangeColor } from "../../variables";
import axios from "axios";
import { CocktailsList } from "../components/CocktailsList";
import { Footer } from "../components/Footer";

const Container = styled.div`
  max-width: 1920px;
  padding: 0 40px;
  margin: 132px auto 0;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 132px);
`;

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Header = styled.h2`
  font-family: ${headerFont};
  text-align: center;
  margin-bottom: 20px;
  color: ${orangeColor};

  @media (max-width: 950px) {
    font-size: 1.2rem;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const LeftSearch = styled.div`
  flex: 1;
`;

const RightSearch = styled.div`
  flex: 1;
`;

const SearchField = styled.div`
  margin: 0 auto 60px;
  width: fit-content;
  display: flex;
  align-items: center;
  border: 1px solid ${orangeColor};
  border-radius: 30px;

  @media (max-width: 700px) {
    margin: 0 auto 40px;
  }
`;

const SearchInput = styled.input`
  width: 400px;
  padding: 20px 30px;
  background: transparent;
  font-size: 1rem;
  border: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 1150px) {
    width: 300px;
  }

  @media (max-width: 950px) {
    width: 200px;
    padding: 15px 20px;
  }
`;

export const SearchPage = () => {
  const [cocktailsArray, setCocktailsArray] = useState([]);
  const [searchCocktail, setSearchCocktail] = useState("");
  const [searchIngredient, setSearchIngredient] = useState("");

  useEffect(() => {
    const loadCocktailsList = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchCocktail}`
      );
      setCocktailsArray(response.data.drinks);
    };

    loadCocktailsList();
  }, [searchCocktail]);

  useEffect(() => {
    const loadCocktailsList = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchIngredient}`
      );
      setCocktailsArray(response.data.drinks);
    };

    loadCocktailsList();
  }, [searchIngredient]);

  const handleSearchInputClick = (searchField) => {
    if (searchField === "cocktail") {
      setSearchIngredient("");
    } else if (searchField === "ingredient") {
      setSearchCocktail("");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Navbar />
        <SearchWrapper>
          <LeftSearch>
            <Header>Search Cocktail by Name</Header>
            <SearchField>
              <SearchInput
                placeholder="For example: Margarita"
                value={searchCocktail}
                onChange={(e) => {
                  setSearchCocktail(e.target.value);
                }}
                onClick={() => handleSearchInputClick("cocktail")}
              />
              <SearchIcon
                style={{ fontSize: "2.5rem", paddingRight: "20px" }}
              />
            </SearchField>
          </LeftSearch>
          <RightSearch>
            <Header>Search Cocktail by Ingredient</Header>
            <SearchField>
              <SearchInput
                placeholder="For example: Gin"
                value={searchIngredient}
                onChange={(e) => {
                  setSearchIngredient(e.target.value);
                }}
                onClick={() => handleSearchInputClick("ingredient")}
              />
              <SearchIcon
                style={{ fontSize: "2.5rem", paddingRight: "20px" }}
              />
            </SearchField>
          </RightSearch>
        </SearchWrapper>
        {cocktailsArray ? (
          <CocktailsList cocktailsArray={cocktailsArray} />
        ) : (
          <p style={{ textAlign: "center" }}>No cocktails have been found.</p>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};
