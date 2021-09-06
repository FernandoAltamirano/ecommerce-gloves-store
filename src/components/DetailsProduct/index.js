import React, { useRef, useState } from "react";
import { ShoppingCartIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { formatter } from "../../utils/formatter";
import {
  Box,
  BoxDetails,
  BoxShop,
  BoxIcon,
  Button,
  Container,
  Image,
  InputNumber,
  Title,
  ImagesContainer,
} from "./styles";
import { Link } from "react-router-dom";
import { useAddToCart } from "../../hooks/useAddToCart";
import { StarIcon } from "@heroicons/react/solid";
export default function DetailsProduct({
  description,
  images,
  name,
  price,
  product_id,
  stock,
  createNotification,
}) {
  const { addToCart } = useAddToCart();
  const [size, setSize] = useState("");
  const quantityRef = useRef();
  const handleAddToCart = () => {
    addToCart({
      image: images[0],
      product_id,
      name,
      price,
      size,
      quantity: quantityRef.current.value || 1,
      subtotal: Number(
        quantityRef.current.value ? price * quantityRef.current.value : price
      ),
    });
    createNotification();
  };

  return (
    <Container>
      <Link to="/products">
        <strong style={{ display: "flex", alignItems: "center" }}>
          <ChevronLeftIcon width="30" style={{ marginRight: 10 }} />
          <p>Volver</p>
        </strong>
      </Link>
      <div>
        <BoxDetails>
          <ImagesContainer>
            {!images ? (
              <p>Loading...</p>
            ) : (
              <>
                <Image
                  alt="Foto de guante"
                  src={images && images[0].data}
                ></Image>
                <div>
                  <img src={images && images[1].data} alt="one" />
                  <img src={images && images[2].data} alt="two" />
                  <img src={images && images[3].data} alt="three" />
                </div>
              </>
            )}
          </ImagesContainer>
          <Title>Descripción</Title>
          <p style={{ maxWidth: "100%", textAlign: "justify" }}>
            {description || ""}
          </p>
        </BoxDetails>
        <BoxShop>
          <Box>
            <div style={{ textAlign: "right" }}>
              <StarIcon width="20" color="var(--black)" />
              <StarIcon width="20" color="var(--black)" />
              <StarIcon width="20" color="var(--black)" />
              <StarIcon width="20" color="var(--black)" />
              <StarIcon width="20" color="var(--black)" />
            </div>
            <h1>{name || ""}</h1>
            <h2>{formatter(price)}</h2>
            <p>Elige tu talla</p>
            <select
              onChange={(ev) => setSize(ev.target.value)}
              placeholder="Elige tu talla"
            >
              <option value="S" key="">
                S
              </option>
              <option value="M" key="">
                M
              </option>
              <option value="L" key="">
                L
              </option>
              <option value="XL" key="">
                XL
              </option>
            </select>
            <p>Cuantos pares desea comprar?</p>
            <InputNumber type="number" ref={quantityRef} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button onClick={handleAddToCart}>Agregar al carrito</Button>
              <BoxIcon sizeIcon="30px">
                <ShoppingCartIcon width="40" />
              </BoxIcon>
            </div>
          </Box>
        </BoxShop>
      </div>
    </Container>
  );
}
