import { useEffect, useState } from "react";
import "./styles/addproduct.css";
import {
  PlusIcon,
  ArchiveIcon,
  CalculatorIcon,
} from "@heroicons/react/outline";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../../firebase";
import firebase from "firebase";

function UpdateProduct() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [data, setData] = useState();

  useEffect(() => {
    db.collection("products")
      .where("product_id", "==", params.id)
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) => {
          const id = doc.id;
          const data = doc.data();
          return {
            ...data,
            id,
            update_at: firebase.firestore.Timestamp.fromDate(new Date()),
          };
        })
      )
      .then((doc) => {
        setData(doc[0]);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const update = (ev) => {
    ev.preventDefault();
    setLoading(true);
    db.collection("products")
      .doc(data.id)
      .set(data, { merge: true })
      .then(() => {
        setLoading(false);
        history.push("/admin");
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <div className="add_product">
      <div className="title">
        <div className="container">
          <PlusIcon width="35" style={{ marginRight: 20 }} />
          <h1>Actualizar producto</h1>
        </div>
      </div>
      <div className="container">
        <form
          className="addproduct_form"
          onSubmit={update}
          style={{ marginTop: "6em" }}
        >
          <div>
            <p style={{ marginBottom: 10, fontWeight: "bold", marginLeft: 10 }}>
              Modificar nombre de producto
            </p>
            <div className="input_container">
              <ArchiveIcon />
              <input
                type="text"
                placeholder="Nombre del producto"
                required
                value={data?.name}
                onChange={(ev) => {
                  setData({ ...data, name: ev.target.value });
                }}
              />
            </div>
          </div>
          <div className="addproduct_row">
            <div>
              <p
                style={{ marginBottom: 10, fontWeight: "bold", marginLeft: 10 }}
              >
                Modificar precio
              </p>
              <div className="input_container">
                <CalculatorIcon />
                <input
                  type="number"
                  placeholder="Precio por par"
                  required
                  value={data?.price}
                  onChange={(ev) => {
                    setData({ ...data, price: Number(ev.target.value) });
                  }}
                />
              </div>
            </div>
            <div>
              <p
                style={{ marginBottom: 10, fontWeight: "bold", marginLeft: 10 }}
              >
                Modificar Stock
              </p>
              <div className="input_container">
                <CalculatorIcon color="white" />
                <input
                  type="number"
                  placeholder="Stock total"
                  required
                  value={data?.stock}
                  onChange={(ev) => {
                    setData({ ...data, stock: ev.target.value });
                  }}
                />
              </div>
            </div>
          </div>
          <p style={{ marginBottom: 10, fontWeight: "bold", marginLeft: 10 }}>
            Descripcion de producto
          </p>
          <textarea
            placeholder="Descripcion del producto"
            required
            value={data?.description}
            onChange={(ev) => {
              setData({ ...data, description: ev.target.value });
            }}
            style={{ height: 150, width: "100%" }}
          ></textarea>

          <button
            disabled={loading ? true : false}
            className={
              loading ? "addproduct_button disable" : "addproduct_button"
            }
          >
            {loading ? "Actualizando" : "Actualizar producto"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
