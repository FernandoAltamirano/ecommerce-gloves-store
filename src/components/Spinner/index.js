import React from "react";
import { Loader, LoaderContainer } from "./styles";

function Spinner() {
  return (
    <LoaderContainer>
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
        <p>Loading...</p>
      </div>
    </LoaderContainer>
  );
}

export default Spinner;
