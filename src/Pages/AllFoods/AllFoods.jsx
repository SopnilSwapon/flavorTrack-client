import axios from "axios";
import { useEffect, useState } from "react";
import Food from "./Food";

const AllFoods = () => {
    const [foods, setFoods] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/foods')
        .then(res => {
            setFoods(res.data)
        })
    },[])
    return (
        <div>
            <h2 className="text-4xl text-center font-bold text-pink-500 pt-20">Our All Foods</h2>
            <p className="w-full md:w-[80%] lg:w-[70%] mx-auto text-center my-2 text-[16px]">Burger, pasta, sandwich, steak, soup, and salad are all culinary delights that offer a blend of flavors and textures. From the savory satisfaction of a well-grilled steak to the comforting warmth of a hearty soup, each dish provides a unique dining experience, catering to diverse palates and preferences</p>
             <div className="grid grid-cols-1 w-full mx-auto md:grid-cols-2 lg:grid-cols-3 gap-9">
            {
                foods.map((food, idx) =><Food key={idx} food={food}></Food>)
            }
            </div>
        </div>
    );
};

export default AllFoods;