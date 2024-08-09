import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProductAdd from "../Pages/Product/ProductAdd";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/product-add",
        element: <ProductAdd></ProductAdd>,
      },
    ],
  },
]);
