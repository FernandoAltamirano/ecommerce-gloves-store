import { db, storage } from "../firebase";

import firebase from "firebase";

export const sendToFirestore = ({
  name,
  stock,
  price,
  description,
  images,
  product_id,
}) => {
  const product = {
    name,
    stock,
    price,
    description,
    images,
    product_id,
    timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
  };
  return db.collection("products").add(product);
};
export const sendSaleToFirestore = ({ cartData, userData }) => {
  const { cart } = cartData;
  const newCart = cart.map((item) => {
    const { image, ...rest } = item;
    return rest;
  });
  const newSale = {
    cart_data: { ...cartData, cart: newCart },
    user_data: userData,
    date_to_sale: firebase.firestore.Timestamp.fromDate(new Date()),
  };
  return db.collection("sales").add(newSale);
};
