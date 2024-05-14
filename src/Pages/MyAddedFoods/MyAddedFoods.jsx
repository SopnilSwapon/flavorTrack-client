import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyAddedFood from "./MyAddedFood";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyAddedFoods = () => {
    const {user} = useAuth();
    const [addedFoods, setAddedFoods] = useState([]);
    const axiosSecure  = useAxiosSecure()
    const url = `/foods/currentuser/${user?.email}`
    useEffect(() =>{
        axiosSecure(url)
        .then(res =>{
            setAddedFoods(res.data);
        })
    },[url, axiosSecure]);
    return (
        <div className="overflow-x-auto bg-gray-300 pt-24 min-h-[calc(100vh-276px)]">
        <table className="table text-xl">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>Image</th>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>price</th>
              <th>Update</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              addedFoods.map(food => <MyAddedFood key={food._id} food={food}></MyAddedFood>)
            }
          </tbody>

        </table>
      </div>
    );
};

export default MyAddedFoods;