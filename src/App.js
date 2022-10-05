import { useState } from "react";
import "./App.css";
import HeaderBar from "./components/header";
import Products from "./components/products";
import ProductDetail from "./components/productDetail";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { getProductDetail } from './services/products';

function App() {
  const [searchTerms, setSearchTerms] = useState('');

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate replace to="/products" />,
    },
    {
      path: "/products",
      element: <Products searchTerms={searchTerms} />,
    },
    {
      path: "/products/:productId",
      element: <ProductDetail />,
      loader: async ({ request, params }) => {
        const { productId } = params;

        return getProductDetail({ productId })
          .then((response) => {
            return response;
          })
          .catch((error) => {
            console.error(error);
            return null;
          });
      }
    },
  ]);

  return (
    <div className="App">
      <HeaderBar onChange={(value) => setSearchTerms(value)} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
