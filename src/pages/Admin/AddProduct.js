import { useEffect, useRef, useState } from "react";
import "./styles/addproduct.css";
import {
  PlusIcon,
  ArchiveIcon,
  CalculatorIcon,
} from "@heroicons/react/outline";
import UploadImage from "../../components/UploadImage";
import { sendToFirestore } from "../../utils/firestore";
import { ErrorMessage } from "../../globalStyles";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
function AddProduct() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const nameRef = useRef();
  const stockRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const history = useHistory();

  const addImage = (img) => setImages([...images, img]);

  const removeImage = (img) =>
    setImages(
      images.filter((item) => {
        return item.name !== img.name;
      })
    );

  const sendProductToFirestore = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const data = {
      name: nameRef.current.value,
      stock: stockRef.current.value,
      price: Number(priceRef.current.value),
      description: descriptionRef.current.value,
      images,
      product_id: nanoid(),
    };
    if (images.length === 4) {
      await sendToFirestore(data);
      setLoading(false);
      history.push("/admin");
    } else {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div className="add_product">
      <div className="title">
        <div className="container">
          <PlusIcon width="35" style={{ marginRight: 20 }} />
          <h1>Añadir producto</h1>
        </div>
      </div>
      <div className="container">
        <form className="addproduct_form" onSubmit={sendProductToFirestore}>
          <div className="input_container">
            <ArchiveIcon />
            <input
              type="text"
              placeholder="Nombre del producto"
              required
              ref={nameRef}
            />
          </div>
          <div className="addproduct_row">
            <div className="input_container">
              <CalculatorIcon />
              <input
                type="number"
                step="0.1"
                placeholder="Precio por par"
                required
                ref={priceRef}
              />
            </div>
            <div className="input_container">
              <CalculatorIcon color="white" />
              <input
                type="number"
                placeholder="Stock total"
                required
                ref={stockRef}
              />
            </div>
          </div>
          <textarea
            placeholder="Descripcion del producto"
            required
            ref={descriptionRef}
          ></textarea>
          <div className="input_container files">
            <p>De click en los recuadros para añadir las imágenes</p>
            {error && <ErrorMessage>Porfavor suba las 4 imagenes</ErrorMessage>}
            <div className="preview_images">
              {[1, 2, 3, 4].map((value) => (
                <UploadImage
                  key={value}
                  removeImage={removeImage}
                  addImage={addImage}
                />
              ))}
            </div>
          </div>

          <button
            disabled={loading ? true : false}
            className={
              loading ? "addproduct_button disable" : "addproduct_button"
            }
          >
            {loading ? "Cargando" : "Registrar producto"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
