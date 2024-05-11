import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import AllFoods from "../Pages/AllFoods/AllFoods";
import AddFoodItem from "../Pages/AddFoodItem/AddFoodItem";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import MyAddedFoods from "../Pages/MyAddedFoods/MyAddedFoods";
import UpdateFood from "../Pages/MyAddedFoods/UpdateFood/UpdateFood";
import PurchaseFood from "../Pages/PurchaseFood/PurchaseFood";

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
        },
        {
          path: '/fooddetails',
          element: <FoodDetails></FoodDetails>
        },
        {
          path: '/myaddedfoods',
          element: <MyAddedFoods></MyAddedFoods>
        },
        {
          path:'/updatefood/:id',
          element: <UpdateFood></UpdateFood>,
          loader: ({params}) =>fetch(`http://localhost:5000/foods/${params.id}`)
        },
      {
        path:'/purchasefood',
        element: <PurchaseFood></PurchaseFood>
      }
      ]
    },
  ]);

  export default router;