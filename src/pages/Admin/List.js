import { useEffect, useState } from "react";
import "./styles/list.css";
import { SearchIcon } from "@heroicons/react/outline";
import { db } from "../../firebase";
import Product from "./Product";
import Spinner from "../../components/Spinner";

function List() {
  const [products, setProducts] = useState(null);
  const [dataFilter, setDataFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    db.collection("products")
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) => {
          const data = doc.data();
          const { timestamp } = data;
          const formattedDate = new Intl.DateTimeFormat("es-ES").format(
            new Date(timestamp.seconds * 1000)
          );
          return { ...data, timestamp: formattedDate };
        })
      )
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  };
  useEffect(() => {
    setLoading(true);
    getProducts();
    return () => getProducts();
  }, []);

  useEffect(() => {
    setDataFilter(
      products?.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );

    return () => setDataFilter([]);
  }, [search, products]);

  return (
    <div className="search_product">
      <div className="title">
        <div className="container">
          <SearchIcon width="35" style={{ marginRight: 20 }} />
          <h1>Buscar productos</h1>
        </div>
      </div>
      <div className="container">
        <div className="input_wrapper">
          <SearchIcon width="20" color="gray" />
          <input
            type="text"
            placeholder="Ingrese palabra clave del producto"
            onChange={(ev) => setSearch(ev.target.value)}
          />
        </div>
        {loading ? (
          <div style={{ paddingTop: "5em" }}>
            <Spinner complete={false} />
          </div>
        ) : (
          <div className="products_container">
            {dataFilter?.map((product) => (
              <Product key={product.product_id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
