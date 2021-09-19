export const decrease = (qty, stock,setQty) => {
  if (qty === 1) return;
  if (qty > stock) return;
  return setQty(qty - 1);
};

export const increase = (qty, stock, setQty) => {
  if (qty >= stock) return;
  return setQty(qty + 1);
};

