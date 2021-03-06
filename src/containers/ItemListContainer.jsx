import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/config.js";
import ItemList from "../components/shop/ItemList/ItemList";
import Loading from "../components/utils/Loading/Loading";

const ItemListContainer = () => {
  const { catId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const productos = db.collection("productos");

    const filtrado = catId
      ? productos.where("category", "==", catId)
      : productos;
    filtrado
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => ({
          ...doc.data(),
          _id: doc.id,
        }));
        setProduct(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return <>{loading ? <Loading /> : <ItemList productos={product} />}</>;
};

export default ItemListContainer;
