import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { darkColor } from "../../variables";
import LogoFile from "../assets/logo.svg";

const Container = styled.div`
  height: 80px;
  padding: 15px 60px 15px 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${darkColor};

  @media (max-width: 730px) {
    height: 56px;
    padding: 15px 40px 15px 40px;
  }

  @media (max-width: 530px) {
    height: 80px;
  }
`;

const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 530px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Logo = styled.img`
  width: 200px;

  @media (max-width: 730px) {
    width: 130px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  font-weight: 200;

  @media (max-width: 730px) {
    font-size: 0.8rem;
    gap: 20px;
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled(Link)`
  text-decoration: none;
  transition: text-shadow 0.3s ease-in-out;

  &:hover {
    text-shadow: 1px 1px 5px rgba(255, 255, 255, 1);
  }
`;

export const Navbar = (props) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo src={LogoFile} />
        </Link>
        <Menu>
          <MenuItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/categories">Categories</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/alcohol">(Non)Alcoholic</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/search">Search</MenuLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};
