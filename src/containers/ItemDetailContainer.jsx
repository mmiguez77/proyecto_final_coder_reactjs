import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/shop/ItemDetail/ItemDetail";
import { getFirestore } from "../firebase/config.js";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const prod = db.collection("productos").doc(itemId);

    prod
      .get()
      .then((doc) => {
        setItem({ _id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <>
      {loading ? (
        <img
          className="col-12"
          src="/img/loading.gif"
          alt="loading..."
          id="img_loading"
        />
      ) : (
        <ItemDetail {...item} />
      )}
    </>
  );
};

export default ItemDetailContainer;
