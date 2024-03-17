import React from "react";
import { ContextNumberCount } from "../../context/context-product-count";
import "./styles.css";

export const Header = () => {
  const { contextNumberCount } = React.useContext(ContextNumberCount);

  return (
    <header className="container-header header-container ">
      <h1>DSFilter</h1>
      <p>
          {contextNumberCount > 1
            ? `${contextNumberCount} produto(s)`
            : `${contextNumberCount} produto`}
      </p>
    </header>
  );
};