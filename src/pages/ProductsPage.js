import Header from "../components/Header";
import Product from "../components/Product";
import { data } from "../data";

function ProductsPage() {
  return (
    <div>
      <Header />
      <div>
        {data.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
