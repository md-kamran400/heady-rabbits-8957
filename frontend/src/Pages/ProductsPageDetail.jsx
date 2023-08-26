import styled from "styled-components";
import { Link } from "react-router-dom";
import "./productPage.css"
export const ProductsPageDetail = ({item}) => {
  return (

      <div className="card" >
      <div className="image-container">
      <img className="image" src={item.image} alt="" />
      </div>
      <h3 className="rating">{item.rating}</h3>
      {/* <h3 className="date">{item.date}</h3> */}
      <h3 className="comments">{item.comments}</h3>
      <h3 className="category">{item.category}</h3>
      <h3 className="price">{item.price}</h3>
      <h3 className="title">{item.title}</h3>
      {/* <h3 className="publisher">{item.publisher}</h3> */}
     
    </div>
  );
};

