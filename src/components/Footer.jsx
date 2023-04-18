import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoFile from "../assets/logo.svg";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1920px;
  margin: 40px auto 0;
  padding: 15px 40px;

  @media (max-width: 730px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Left = styled.div``;

const Center = styled.div``;

const Right = styled.div`
  display: flex;
  gap: 30px;
`;

const Logo = styled.img`
  width: 120px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  font-weight: 200;
  font-size: 0.8rem;

  @media (max-width: 380px) {
    gap: 15px;
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled(Link)`
  text-decoration: none;
`;

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {" "}
          <Link to="/">
            <Logo src={LogoFile} />
          </Link>
        </Left>
        <Center>
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
        </Center>
        <Right>
          <GoogleIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </Right>
      </Wrapper>
    </Container>
  );
};
