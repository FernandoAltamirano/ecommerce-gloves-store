import { db, storage } from "../firebase";

import firebase from "firebase";

export const sendToFirestore = ({
  name,
  stock,
  price,
  description,
  images,
  product_id,
}) => {
  const product = {
    name,
    stock,
    price,
    description,
    images,
    product_id,
    timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
  };
  return db.collection("products").add(product);
};

export const uploadImage = (image, doc) => {
  const task = storage.ref(`products/${doc.id}`).putString(image, "data_url");
  return task.on(
    "state_change",
    null,
    (err) => console.error(err),
    () => {
      return storage.ref("products").child(doc.id).getDownloadURL();
      // .then((url) => {
      //   db.collection("products").doc(doc.id).set(
      //     {
      //       images,
      //     },
      //     { merge: true }
      //   );
      // });
    }
  );
};
