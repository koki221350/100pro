import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Result from "./components/Result";
import Products from "./components/Products";

export const Page2 = () => {
  return (
    <>
      <Header />
      <Result />
      <Products message="ポテチ" />
    </>
  );
};
