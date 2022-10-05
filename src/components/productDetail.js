import "./detail.scss";
import { useParams, useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const product = useLoaderData();

  console.log(product)

  return (
    <div className="product_detail-outside">
      <p id="product_filter">categories filters</p>
      <div className="detail-container">
        <div>
          <img className="detail_img"></img>
          <p className="detail_title">{product?.name}</p>
          <h3 className="detail_description">description</h3>
        </div>

        <div className="details-div">
          <p className="detail_title">title description</p>
          <p className="product_price">{product?.price}</p>
          <button className="bnt_get">Comprar</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default ProductDetail;
