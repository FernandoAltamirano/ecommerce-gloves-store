import { LabelUpload, UploadContainer, ImageUploaded } from "./styles.js";
import { UploadIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

function UploadImage({ addImage, removeImage }) {
  const [imageUploaded, setImageUploaded] = useState(null);
  const handleUploadImage = (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    if (e.target.files) {
      if (
        image.type === "image/png" ||
        image.type === "image/jpeg" ||
        image.type === "image/jpg"
      ) {
        const file = new FileReader();
        file.readAsDataURL(image);
        file.onload = (ev) => {
          setImageUploaded({ name: image.name, data: ev.target.result });
          addImage({ name: image.name, data: ev.target.result });
        };
      }
    }
  };

  return (
    <UploadContainer>
      {!imageUploaded ? (
        <LabelUpload className="input_file">
          <UploadIcon />
          <input
            style={{ display: "none" }}
            type="file"
            onChange={handleUploadImage}
            multiple
          />
          Subir imágenes
        </LabelUpload>
      ) : (
        <ImageUploaded>
          <XIcon
            width="20"
            color="var(--black)"
            cursor="pointer"
            onClick={() => {
              removeImage(imageUploaded);
              setImageUploaded(null);
            }}
          />
          <img src={imageUploaded?.data} alt="product" />
        </ImageUploaded>
      )}
    </UploadContainer>
  );
}

export default UploadImage;
