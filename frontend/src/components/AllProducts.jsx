import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsPageDetail } from "../Pages/ProductsPageDetail";
import { getAllProducts } from "../Redux/Products/action";
import ProductBanner from "../Pages/ProductBanner";
import "../Component/Home.css"
import { Link } from "react-router-dom";
export default function AllProducts() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.singleData.Alldata);
  const loading = useSelector((store) => store.singleData.isLoading);
  const error = useSelector((store) => store.singleData.isError);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

 
  return (
    <div className="alldatasec">
      <ProductBanner/>
      <div style={{ display: "grid",   gridTemplateColumns: "repeat(3, 1fr)", marginTop: "20px",paddingBottom: "40px"}}>
        {data.map((item) => (
          <div key={item.id} >
            <Link to="/checkout">
            <ProductsPageDetail item={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
