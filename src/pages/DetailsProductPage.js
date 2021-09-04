import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { DetailsProduct, Header } from "../components";
import { db } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
export default function DetailsProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const createNotification = () =>
    toast.success("Añadido al carrito", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
      <DetailsProduct {...product} createNotification={createNotification} />;
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}
