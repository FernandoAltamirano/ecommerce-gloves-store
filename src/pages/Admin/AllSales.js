import { useEffect, useState } from "react";
import {
  CalendarIcon,
  PresentationChartBarIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { db } from "../../firebase";
import Spinner from "../../components/Spinner";
import "./styles/allsales.css";
import { formatter } from "../../utils/formatter";
function AllSales() {
  const [sales, setSales] = useState(null);
  const [dataFilter, setDataFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    db.collection("sales")
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          const { date_to_sale, cart_data, user_data } = data;
          const amount = cart_data.total;
          const { name, lastname } = user_data;
          const formattedDate = new Intl.DateTimeFormat("es-ES").format(
            new Date(date_to_sale.seconds * 1000)
          );
          return {
            id,
            amount,
            client: `${name}${lastname}`,
            date_to_sale: formattedDate,
          };
        })
      )
      .then((data) => {
        setLoading(false);
        console.log(data);
        setSales(data);
      });
  };
  useEffect(() => {
    setLoading(true);
    getProducts();
    return () => getProducts();
  }, []);

  useEffect(() => {
    setDataFilter(
      sales?.filter((item) =>
        item.client.toLowerCase().includes(search.toLowerCase())
      )
    );

    return () => setDataFilter([]);
  }, [search, sales]);

  return (
    <div className="search_product">
      <div className="title">
        <div className="container">
          <PresentationChartBarIcon width="35" style={{ marginRight: 20 }} />
          <h1>Ventas</h1>
        </div>
      </div>
      <div className="container">
        <div className="input_wrapper">
          <SearchIcon width="20" color="gray" />
          <input
            type="text"
            placeholder="Ingrese nombre del cliente"
            onChange={(ev) => setSearch(ev.target.value)}
          />
        </div>
        <div className="header_sales">
          <p>Nro de boleta</p>
          <p>Cliente</p>
          <p>Fecha de emisión</p>
          <p>Monto total</p>
        </div>
        {loading ? (
          <div style={{ paddingTop: "5em" }}>
            <Spinner complete={false} />
          </div>
        ) : sales?.length < 1 ? (
          <div className="empty_sales_container">
            <img
              src="https://image.flaticon.com/icons/png/512/2898/2898425.png"
              alt=""
            />
            <h3>No hay ventas registradas</h3>
          </div>
        ) : (
          <div className="sales_container">
            {dataFilter?.map((data, i) => (
              <div key={data.id} className="sale">
                {" "}
                <div>
                  <p>N° {i + 1 > 9 ? `0${i + 1}` : `00${i + 1}`}</p>
                </div>
                <div>
                  <p className="client">{data.client}</p>
                </div>
                <div className="date">
                  {" "}
                  <CalendarIcon width="10" color="black" />
                  <p>{data.date_to_sale}</p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>{formatter(data.amount)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllSales;
