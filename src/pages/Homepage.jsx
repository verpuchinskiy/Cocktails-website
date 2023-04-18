import React from "react";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Quote } from "../components/Quote";
import { Popular } from "../components/Random";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
      <Popular />
      <Footer />
    </>
  );
};
