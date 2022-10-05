import "./products.scss";
import logo from "../Assets/Logo_ML.png";
import { Link } from "react-router-dom";
import { getProducts } from "../services/products";
import { useEffect, useState } from "react";

const Products = ({ searchTerms }) => {
  const [products, setProducts] = useState([]);

  // acá va la API call
  useEffect(() => {
    if (searchTerms) {
      getProducts({ searchTerms })
        .then((response) => setProducts(response))
        .catch((error) => console.error(error));
    }
  }, [searchTerms]);

  return (
    <div>
      <div className="product_container-outside">
        <p id="product_filter">categories filters</p>
        {products.map((product) => (
          <div className="product_container" key={product.id}>
            <div>
              <Link to={`/products/${product.id}`}>
                <img
                  className="product_img"
                  src={logo}
                  alt="Producto bus"
                ></img>
              </Link>
            </div>

            <div className="product_details-div">
              <p className="product_title">{product.name}</p>
              <p className="product_price">price</p>
              <h3 className="product_description">description</h3>
            </div>
            <div>
              <p className="product_place">Ubicacion</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
