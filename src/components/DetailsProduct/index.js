import React, { useEffect, useRef, useState } from "react";
import {
  ShoppingCartIcon,
  TruckIcon,
  ChevronLeftIcon,
} from "@heroicons/react/solid";
import IconBox from "../../icons/box-open-solid.svg";
import { formatter } from "../../utils/formatter";
import {
  Box,
  BoxAmount,
  BoxColor,
  BoxDetails,
  BoxShop,
  BoxIcon,
  Button,
  Container,
  Color,
  Image,
  Item,
  InputNumber,
  SubTitle,
  Title,
  ImagesContainer,
  InputRadio,
  ItemDelivery,
} from "./styles";
import { Link, useHistory, useParams } from "react-router-dom";
import { data as info } from "../../data";
import { useAddToCart } from "../../hooks/useAddToCart";
const colorBg = {
  bgColorBlack: "black",
  bgColorWhite: "white",
};

export default function DetailsProduct() {
  const { addToCart } = useAddToCart();
  const [color, setColor] = useState("");
  const [data, setData] = useState(null);
  const { id } = useParams();
  const quantityRef = useRef();
  const history = useHistory();
  const handleAddToCart = () => {
    addToCart({
      image: data.image,
      id: data.id,
      title: data.title,
      price: data.price,
      quantity: quantityRef.current.value,
      color,
      subtotal: data.price * quantityRef.current.value,
    });
    history.push("/products");
  };
  useEffect(() => {
    const data = info.filter((item) => item.id == id);
    console.log(data);
    setData(data[0]);
  }, []);
  return (
    <>
      {data && (
        <Container>
          <Link to="/products">
            <strong style={{ display: "flex", alignItems: "center" }}>
              <ChevronLeftIcon width="30" style={{ marginRight: 10 }} />
              <p>Regresar</p>
            </strong>
          </Link>
          <div>
            <BoxDetails>
              <ImagesContainer>
                <Image alt="Foto de guante" src={data.image}></Image>
                <div>
                  <img src={data.image} alt="one" />
                  <img src={data.image} alt="two" />
                  <img src={data.image} alt="three" />
                </div>
              </ImagesContainer>
              <Title>{data.title}</Title>
              <p style={{ maxWidth: "90%" }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,.
              </p>
            </BoxDetails>
            <BoxShop>
              <Box>
                <SubTitle>Precio por par</SubTitle>
                <h2>{formatter(data.price)}</h2>
                <SubTitle>Color</SubTitle>
                <BoxColor>
                  <Item>
                    <input
                      value="black"
                      onChange={(ev) => setColor(ev.target.value)}
                      name="color"
                      type="radio"
                    />
                    <Color theme={colorBg.bgColorBlack}></Color>
                  </Item>
                  <Item>
                    <input
                      value="white"
                      onChange={(ev) => setColor(ev.target.value)}
                      name="color"
                      type="radio"
                    />
                    <Color theme={colorBg.bgColorWhite}></Color>
                  </Item>
                </BoxColor>
                <SubTitle>Cantidad</SubTitle>
                <BoxAmount>
                  <InputNumber type="number" ref={quantityRef} />
                  <div>
                    <Button onClick={handleAddToCart}>
                      Agregar al carrito
                    </Button>
                    <BoxIcon sizeIcon="30px">
                      <ShoppingCartIcon width="40" />
                    </BoxIcon>
                  </div>
                </BoxAmount>
              </Box>
              <h2>Tipo de entrega</h2>
              <ItemDelivery>
                <div>
                  <TruckIcon width="50" />
                </div>
                <div>
                  <p>
                    <strong>
                      A domicilio - <small>disponible</small>
                    </strong>
                  </p>
                  <p style={{ fontSize: 14, fontWeight: "bold" }}>
                    Costo extra
                  </p>
                </div>
                <div>
                  <InputRadio
                    type="radio"
                    name="delivery"
                    style={{ margin: 0, width: 50 }}
                  />
                </div>
              </ItemDelivery>
              <ItemDelivery>
                <div>
                  <img src={IconBox} alt="icon box" width="50" />
                </div>
                <div>
                  <p>
                    <strong>
                      Retiro en tienda - <small>disponible</small>
                    </strong>
                  </p>
                  <p style={{ fontSize: 14, fontWeight: "bold" }}>Gratis</p>
                </div>
                <div>
                  <InputRadio
                    type="radio"
                    name="delivery"
                    style={{ margin: 0, width: 50 }}
                  />
                </div>
              </ItemDelivery>
            </BoxShop>
          </div>
        </Container>
      )}
    </>
  );
}
