import axios from "axios";
import { useEffect, useState } from "react";
import TopFood from "./TopFood";

const TopFoods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(()=>{
        axios.get('/foods.json')
        .then(res=>{
             setFoods(res.data)

        })
    }, []);
    console.log(foods);
    return (
        <div>
            <h2 className="text-4xl text-center font-bold text-pink-500 my-10">Most Sells Foods</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-9">
          {
                foods.map((food, idx) =><TopFood key={idx} food={food}></TopFood>)
            }
          </div>
            
        </div>
    );
};

export default TopFoods;