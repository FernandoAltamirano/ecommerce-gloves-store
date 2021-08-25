import React from "react";
import { nanoid } from "nanoid";
import { useCart } from "../../hooks/useCart";
import { formatter } from "../../utils/formatter";
import { ProductCard } from "./styles";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, ArrowSmRightIcon } from "@heroicons/react/solid";

function Product({ id, title, price, image }) {
  const [_, dispatch] = useCart();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        key: nanoid(),
        image,
        id,
        title,
        price,
      },
    });
  };

  return (
    <ProductCard>
      <img src={image} alt="product" />
      <div>
        <h2>{formatter(price)}</h2>
        <h4>{formatter(price)}</h4>
        <p>Nombre del producto numero {id}</p>
      </div>
      <div>
        <ShoppingCartIcon
          cursor="pointer"
          onClick={addToCart}
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
