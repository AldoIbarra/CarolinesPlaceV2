import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/Nav/NavBar.jsx'
import Banner from './components/Banner/Banner.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Products from './pages/Products/Products.jsx'
import Product from './pages/Product/Product.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "SignIn",
    element: <SignIn/>
  },
  {
    path: "SignUp",
    element: <SignUp/>
  },
  {
    path: "Products",
    element: <Products/>
  },
  {
    path: "Product",
    element: <Product/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
