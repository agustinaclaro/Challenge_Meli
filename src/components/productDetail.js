import "./detail.scss";
import logo from "../Assets/Logo_ML.png";
import { useParams, useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const product = useLoaderData();

  console.log(product);

  return (
    <div className="product_detail-outside">
      <p id="product_filter" className="detail_category">
        categories filters
      </p>

      <div className="detail-container">
        <div className="details-img-description">
        <img src={logo} className="detail_img"></img>       
          <p className="detail_desciption">Descripcion del producto</p>
          <p className="detail_desciption_p">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
          </p>
        </div>
        <div className="details-div">
          <p className="detail_title">{product?.name}</p>
          <p className="product_price">{product?.price}</p>
          <button className="btn_get">Comprar</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
