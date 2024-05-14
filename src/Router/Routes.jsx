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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyOrder from "../Pages/MyOrder/MyOrder";
import Gallery from "../Pages/Gallery/Gallery";
import Contact from "../Pages/Contact/Contact";

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
          element: <PrivateRoute><AddFoodItem></AddFoodItem></PrivateRoute>
        },
        {
          path: '/fooddetails/:id',
          element:<FoodDetails></FoodDetails>,
          loader: ({params}) =>fetch(`https://flavortrack-a59b2.firebaseapp.com/foods/${params.id}`)
        },
        {
          path: '/myaddedfoods',
          element: <PrivateRoute><MyAddedFoods></MyAddedFoods></PrivateRoute>
        },
        {
          path:'/updatefood/:id',
          element: <UpdateFood></UpdateFood>,
          loader: ({params}) =>fetch(`https://flavortrack-a59b2.firebaseapp.com/foods/${params.id}`)
        },
      {
        path:'/purchasefood/:id',
        element: <PrivateRoute><PurchaseFood></PurchaseFood></PrivateRoute>,
        loader: ({params}) =>fetch(`https://flavortrack-a59b2.firebaseapp.com/foods/${params.id}`)
      },
      {
        path: '/myorders',
        element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
      ]
    },
  ]);

  export default router;