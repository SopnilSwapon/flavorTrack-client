import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyFoodRow from "./MyFoodRow";

const MyOrder = () => {
    const {user} = useAuth();
    const [myFoods, setMyFoods] = useState([]);
    useEffect(()=> {
        axios.get(`https://flavortrack-server.vercel.app/purchase/${user?.email}`)
        .then(result =>{
           setMyFoods(result.data)
        })
    },[user]);
    console.log(myFoods);
    return (
        <div className="overflow-x-auto bg-gray-300 pt-24 min-h-[calc(100vh-276px)]">
        <table className="table text-xl">
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