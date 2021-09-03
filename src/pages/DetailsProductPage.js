import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { DetailsProduct, Header } from "../components";
import { db } from "../firebase";

export default function DetailsProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    console.log(id);
    db.collection("products")
      .where("product_id", "==", id)
      .get()
      .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
      .then((data) => {
        setProduct(data[0]);
        console.log(data);
      })
      .catch((err) => console.error(err.message));
  }, []);
  return (
    <div>
      <Header />
      <DetailsProduct {...product} />;
    </div>
  );
}
