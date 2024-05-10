import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import AllFoods from "../Pages/AllFoods/AllFoods";
import AddFoodItem from "../Pages/AddFoodItem/AddFoodItem";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/signin',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Register></Register>
        },
        {
          path: '/allfoods',
          element: <AllFoods></AllFoods>
        },
        {
          path: '/addfooditem',
          element: <AddFoodItem></AddFoodItem>
        }
      ]
    },
  ]);

  export default router;