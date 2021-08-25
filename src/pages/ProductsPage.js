import Banner from "../components/Banner";
import Header from "../components/Header";
import Product from "../components/Product";
import { data } from "../data";
import { ProductsWrapper } from "./styles/products";
import Footer from "../components/Footer";
import Returnup from "../components/Returnup";
function ProductsPage() {
  return (
    <div>
      <Header />
      <Banner />
      <ProductsWrapper>
        {data.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </ProductsWrapper>
      <Footer />
      <Returnup />
    </div>
  );
}

export default ProductsPage;
