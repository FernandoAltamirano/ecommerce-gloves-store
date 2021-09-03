import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Product from "../components/Product";
import { ProductsWrapper } from "./styles/products";
import Footer from "../components/Footer";
import Returnup from "../components/Returnup";
import { db } from "../firebase";
import Spinner from "../components/Spinner";
import { ToastContainer, toast } from "react-toastify";
function ProductsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    db.collection("products")
      .get()
      .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
      });
  }, []);
  return (
    <div>
      <Header />
      <Banner />
      <ProductsWrapper>
        {loading ? (
          <Spinner complete={false} />
        ) : (
          <>
            {" "}
            {data.map((item) => (
              <Product
                key={item.id}
                createNotification={createNotification}
                {...item}
              />
            ))}
          </>
        )}
      </ProductsWrapper>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
      <Returnup />
    </div>
  );
}

export default ProductsPage;
