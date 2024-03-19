import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/product/Product";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import Menu from "./components/Menu/Menu";
import Login from "./pages/login/login";
import "./styles/global.scss"
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import User from "./pages/user/User";
function App() {
  const Layout = () => {

    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="contentConatiner">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/users/:id",
          element: <User />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/products/:id",
          element: <Product />
        },

      ]
    },
    {
      path: "/login",
      element: <Login />
    }

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
