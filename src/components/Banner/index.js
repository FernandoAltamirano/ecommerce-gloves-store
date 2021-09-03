import React from "react";
// import CountDown from "../CountDown/index.js";
import { BannerContainer } from "./styles.js";
function Banner() {
  return (
    <BannerContainer>
      <p>Aprovecha los descuentos por tiempo limitado</p>
      <p>30% dcto.</p>
      <p>
        {/* Quedan <br /> <CountDown /> */}
        Quedan <br /> 2 dias
      </p>
    </BannerContainer>
  );
}

export default Banner;
