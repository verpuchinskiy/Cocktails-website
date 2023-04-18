import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { darkColor, lightColor, orangeColor } from "../../variables";
import { CocktailsList } from "../components/CocktailsList";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Container = styled.div`
  max-width: 1920px;
  padding: 0 40px;
  margin: 132px auto 0;
`;

const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
`;

const SingleCategory = styled.span`
  border: 1px solid ${orangeColor};
  padding: 20px;
  border-radius: 30px;
  color: ${orangeColor};
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    `background-color: ${orangeColor};
  color: white;`}

  @media (max-width: 905px) {
    font-size: 0.8rem;
    padding: 15px;
  }

  @media (max-width: 570px) {
    font-size: 0.7rem;
    padding: 10px;
  }
`;

export const Categories = () => {
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [chosenCategory, setChosenCategory] = useState(
    sessionStorage.getItem("chosenCategory") || "Cocktail"
  );
  const [cocktailsArray, setCocktailsArray] = useState(
    JSON.parse(sessionStorage.getItem("cocktailsArray")) || []
  );
  const [isCategorySelected, setIsCategorySelected] = useState(
    sessionStorage.getItem("chosenCategory") || ""
  );

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        );
        setCategoriesArray(response.data.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${chosenCategory}`
        );
        setCocktailsArray(response.data.drinks);
        sessionStorage.setItem("chosenCategory", chosenCategory);
        sessionStorage.setItem(
          "cocktailsArray",
          JSON.stringify(response.data.drinks)
        );
      } catch (error) {
        console.log(error);
      }
    };

    getCocktails();
  }, [chosenCategory]);

  const handleClick = (event) => {
    const text = event.target.textContent;
    setChosenCategory(text);
    setIsCategorySelected(text);
  };

  return (
    <Container>
      <Navbar />
      <CategoriesList>
        {categoriesArray.map((category) => (
          <SingleCategory
            key={category.strCategory}
            onClick={handleClick}
            isSelected={category.strCategory === isCategorySelected}
          >
            {category.strCategory}
          </SingleCategory>
        ))}
      </CategoriesList>
      {cocktailsArray ? (
        <CocktailsList cocktailsArray={cocktailsArray} />
      ) : (
        <p style={{ textAlign: "center" }}>Please choose the category</p>
      )}
      <Footer />
    </Container>
  );
};
