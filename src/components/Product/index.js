import React from "react";
import { formatter } from "../../utils/formatter";
import { ProductCard } from "./styles";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, ArrowSmRightIcon } from "@heroicons/react/solid";
import { useAddToCart } from "../../hooks/useAddToCart";

function Product({ id, title, price, image, createNotification }) {
  const { addToCart } = useAddToCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      price,
      image,
      subtotal: price,
      color: "black",
      quantity: 1,
    });
    createNotification();
  };
  return (
    <ProductCard>
      <img src={image} alt="product" />
      <div>
        <h2>{formatter(price)}</h2>
        <h4
          style={{
            textDecoration: "line-through",
            color: "gray",
            fontWeight: "normal",
          }}
        >
          {formatter(price)}
        </h4>
        <p>Nombre del producto numero {id}</p>
      </div>
      <div>
        <ShoppingCartIcon
          cursor="pointer"
          onClick={handleAddToCart}
          widht="40"
          height="40"
        />
        <Link to={`/products/details/${id}`}>
          <p>Ver detalles</p>
          <ArrowSmRightIcon />
        </Link>
      </div>
    </ProductCard>
  );
}

export default Product;
