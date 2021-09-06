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
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
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

  const getData = () => {
    setLoading(true);
    db.collection("products")
      .get()
      .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
      .then((data) => {
        setLoading(false);
        const split1 = data.splice(0, data.length / 2);
        const split2 = data.splice(data.length / 2, data.length - 1);
        setData1(split1);
        setData2(split2);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
      });
  };
  useEffect(() => {
    getData();
    return () => getData();
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
            {data1.map((item) => (
              <Product
                key={item.product_id}
                createNotification={createNotification}
                {...item}
              />
            ))}
          </>
        )}
      </ProductsWrapper>
      <img
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
        }}
        src="https://outletmotostorevalencia.com/wp-content/uploads/2020/09/guantes_moto.jpg"
        alt=""
      />{" "}
      <ProductsWrapper>
        <h2>Te puede interesar</h2>
      </ProductsWrapper>
      <ProductsWrapper>
        {loading ? (
          <Spinner complete={false} />
        ) : (
          <>
            {" "}
            {data2.map((item) => (
              <Product
                key={item.product_id}
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
        draggable
        pauseOnHover
      />
      <Footer />
      <Returnup />
    </div>
  );
}

export default ProductsPage;
