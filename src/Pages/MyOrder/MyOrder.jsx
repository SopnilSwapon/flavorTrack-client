import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyFoodRow from "./MyFoodRow";
import { Helmet } from "react-helmet";

const MyOrder = () => {
    const {user} = useAuth();
    const [myFoods, setMyFoods] = useState([]);
    const loggedEmail = user?.email;
    useEffect(()=> {
        axios.get(`https://flavortrack-server.vercel.app/purchase/${loggedEmail}`,{
          withCredentials: true
        })
        .then(result =>{
           setMyFoods(result.data)
        })
    },[user, loggedEmail]);
    console.log(myFoods);
    return (
        <div className="overflow-x-auto bg-gray-300 pt-24 min-h-[calc(100vh-276px)]">
         <h2 className="text-4xl font-bold text-center mb-5">My Order Foods</h2>
         <hr />
        <table className="table text-xl">
          <Helmet>
          <title>Profile||Order</title>
          </Helmet>
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>Image</th>
              <th>FoodName</th>
              <th>price</th>
              <th>PurchaseTime</th>
              <th>FoodOwner</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              myFoods.map(food => <MyFoodRow key={food._id} food={food}></MyFoodRow>)
            }
          </tbody>

        </table>
      </div>
    );
};

export default MyOrder;