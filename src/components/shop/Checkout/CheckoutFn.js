import { getFirestore } from "../../../firebase/config.js";
import firebase from "firebase/app";
import "firebase/firestore";

const generateOrder = function (buyer, cart, totalBuyAmount) {
  return new Promise(async (resolve, reject) => {
    const db = getFirestore();
    const pedido = db.collection("pedidos");

    const newPedido = {
      buyer: buyer,
      items: cart,
      total: totalBuyAmount(),
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    pedido.add(newPedido).then((res) => resolve(res.id));
  });
};

export default generateOrder;
