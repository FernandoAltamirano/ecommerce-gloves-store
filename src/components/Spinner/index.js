import React from "react";
import { Loader, LoaderContainer } from "./styles";

function Spinner({ complete = true }) {
  return (
    <LoaderContainer complete={complete}>
      <div>
        <Loader>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Loader>
        <p>Cargando...</p>
      </div>
    </LoaderContainer>
  );
}

export default Spinner;
