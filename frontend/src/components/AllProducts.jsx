import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsPageDetail } from "../Pages/ProductsPageDetail";
import { getAllProducts } from "../Redux/Products/action";

export default function AllProducts() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.singleData.Alldata);
  const loading = useSelector((store) => store.singleData.isLoading);
  const error = useSelector((store) => store.singleData.isError);

  useEffect(() => {
    dispatch(getAllProducts);
  }, []);

  return (
    <div>
      <div style={{ display: "grid",   gridTemplateColumns: "repeat(3, 1fr)", marginTop: "20px",paddingBottom: "40px"}}>
        {data.map((item) => (
          <div key={item.id} >
            <ProductsPageDetail item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
