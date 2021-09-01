import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CheckoutListProduct from "../CheckoutListProduct";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import {
  CheckoutListContainer,
  Table,
  Tr,
  NameProduct,
  EmptyCart,
} from "./styles";

function CheckoutList() {
  const [{ cart }, _] = useCart();
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CheckoutListContainer>
      {cart?.length < 1 ? (
        <EmptyCart>
          <p>No agregaste productos al carrito :(</p>
          <ShoppingBagIcon color="var(--black)" width="60" />
          <Link to="/products">Agregar productos</Link>
        </EmptyCart>
      ) : (
        <Table>
          <thead>
            <Tr>
              <th>
                <NameProduct>
                  <p>Nombre del producto</p>
                </NameProduct>
              </th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </Tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CheckoutListProduct key={item.key} {...item} />
            ))}
          </tbody>
        </Table>
      )}
    </CheckoutListContainer>
  );
}

export default CheckoutList;
