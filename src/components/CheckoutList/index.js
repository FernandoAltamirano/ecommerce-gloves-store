import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CheckoutListProduct from "../CheckoutListProduct";
import { CheckoutListContainer, Table, Tr, NameProduct } from "./styles";
function CheckoutList() {
  const [{ cart }, _] = useCart();

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <CheckoutListContainer>
      {cart?.length < 1 ? (
        <p>
          No agregaste productos al carrito.{" "}
          <Link to="/products">Click aqui para añadir algun producto</Link>{" "}
        </p>
      ) : (
        <Table>
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
          {cart.map((item) => (
            <CheckoutListProduct key={item.key} {...item} />
          ))}
        </Table>
      )}
    </CheckoutListContainer>
  );
}

export default CheckoutList;
