import React, { useEffect } from "react";
import { formatter } from "../../utils/formatter";
import { ProductCard } from "./styles";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, ArrowSmRightIcon } from "@heroicons/react/solid";
import { useAddToCart } from "../../hooks/useAddToCart";

function Product({ name, price, images, product_id, createNotification }) {
  const { addToCart } = useAddToCart();

  const handleAddToCart = () => {
    console.log({
      product_id,
      name,
      price,
      image: images[0],
      subtotal: Number(price),
      quantity: 1,
    });
    addToCart({
      product_id,
      name,
      price,
      image: images[0],
      subtotal: Number(price),
      quantity: 1,
    });
    createNotification();
  };
  return (
    <ProductCard>
      <img src={images[0].data} alt="product" />
      <div>
        <h2 style={{ margin: "1em 0" }}>{formatter(price)}</h2>
        <h4
          style={{
            textDecoration: "line-through",
            color: "gray",
            fontWeight: "normal",
          }}
        >
          {formatter(price)}
        </h4>
        <p style={{ margin: "2em 0" }}>{name}</p>
      </div>
      <div>
        <ShoppingCartIcon
          cursor="pointer"
          onClick={handleAddToCart}
          widht="40"
          height="40"
        />
        <Link to={`/products/details/${product_id}`}>
          <p>Ver detalles</p>
          <ArrowSmRightIcon />
        </Link>
      </div>
    </ProductCard>
  );
}

export default Product;
