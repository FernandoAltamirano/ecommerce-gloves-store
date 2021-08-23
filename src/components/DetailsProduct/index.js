import React from "react";
import { ShoppingCartIcon, TruckIcon } from "@heroicons/react/solid";
import IconBox from "../../icons/box-open-solid.svg";

import {
  Box,
  BoxAmount,
  BoxColor,
  BoxDetails,
  BoxDelivery,
  BoxShop,
  BoxIcon,
  Button,
  Break,
  Container,
  Color,
  Description,
  Image,
  Item,
  InputRadio,
  InputNumber,
  Price,
  SubTitle,
  Title,
  TitleDelivery,
} from "./styles";

const colorBg = {
  bgColorBlack: "black",
  bgColorWhite: "white",
};

export default function DetailsProduct() {
  return (
    <Container>
      <Image alt="Foto de guante"></Image>
      <BoxDetails>
        <Title>Guante de cuero</Title>
        <Description>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Description>
      </BoxDetails>
      <BoxShop>
        <Box>
          <SubTitle>Precio</SubTitle>
          <Price>S/ 45.00</Price>
          <SubTitle>Color</SubTitle>
          <BoxColor>
            <Item>
              <InputRadio name="color" type="radio" />
              <Color theme={colorBg.bgColorBlack} />
            </Item>
            <Item>
              <InputRadio name="color" type="radio" />
              <Color theme={colorBg.bgColorWhite} />
            </Item>
          </BoxColor>
          <SubTitle>Cantidad</SubTitle>
          <BoxAmount>
            <InputNumber type="number" />
            <Button>Agregar al carrito</Button>
            <BoxIcon sizeIcon="30px">
              <ShoppingCartIcon width="100%" />
            </BoxIcon>
          </BoxAmount>
        </Box>
        <Box>
          <Title sub="true">Tipo de entrega</Title>
          <Break />
          <BoxDelivery>
            <BoxIcon sizeIcon="50px">
              <TruckIcon />
            </BoxIcon>
            <TitleDelivery>
              A domicilio - <p>Disponible</p>
              <SubTitle>Costo extra</SubTitle>
            </TitleDelivery>
            <InputRadio name="delivery" type="radio" sizeRadio="30px" />
          </BoxDelivery>
          <Break show="true" />
          <BoxDelivery>
            <BoxIcon sizeIcon="50px">
              <img src={IconBox} alt="box" />
            </BoxIcon>
            <TitleDelivery>
              Retiro en tienda - <p>Disponible</p>
              <SubTitle>Gratis</SubTitle>
            </TitleDelivery>
            <InputRadio name="delivery" type="radio" sizeRadio="30px" />
          </BoxDelivery>
        </Box>
      </BoxShop>
    </Container>
  );
}
