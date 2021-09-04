import { Link } from "react-router-dom";
import "./styles/product.css";
import { format } from "timeago.js";

function Product({
  description,
  images,
  name,
  price,
  stock,
  timestamp,
  product_id,
  update_at,
}) {
  return (
    <Link to={`/admin/product/${product_id}`}>
      <div className="product">
        <div className="top">
          <div className="principal_info">
            <p>
              <strong>Nombre:</strong> {name}
            </p>
            <p className="description">
              <strong>Description:</strong> {description}
            </p>
          </div>
          <div className="image">
            <img src={images[0].data} alt={images[0].name} />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p>
              <strong>Precio:</strong>
              <br /> {price}
            </p>
            <p>
              <strong>Stock:</strong>
              <br /> {stock}
            </p>
          </div>
          <div className="right">
            <p>
              <strong>Añadido el</strong>
              <br /> {timestamp}
            </p>
            <p>
              <strong>id de producto: </strong>
              <br /> {product_id}
            </p>
          </div>
        </div>
        <p>
          <strong>Actualizado: </strong>{" "}
          {update_at ? format(update_at.toDate()) : "-"}
        </p>
      </div>
    </Link>
  );
}

export default Product;
