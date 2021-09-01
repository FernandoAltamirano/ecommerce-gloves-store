import Banner from "../components/Banner";
import Header from "../components/Header";
import Product from "../components/Product";
import { data } from "../data";
import { ProductsWrapper } from "./styles/products";
import Footer from "../components/Footer";
import Returnup from "../components/Returnup";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function ProductsPage() {
  const createNotification = () =>
    NotificationManager.success("Éxito", "Producto añadido correctamente");
  return (
    <div>
      <Header />
      <Banner />
      <ProductsWrapper>
        {data.map((item) => (
          <Product
            key={item.id}
            createNotification={createNotification}
            {...item}
          />
        ))}
      </ProductsWrapper>
      <NotificationContainer />
      <Footer />
      <Returnup />
    </div>
  );
}

export default ProductsPage;
