import axios from "axios";
import { useEffect, useState } from "react";
import Food from "./Food";
// import useAuth from "../../Hooks/useAuth";

const AllFoods = () => {
    
    const [foods, setFoods] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/foods')
        .then(res => {
            setFoods(res.data)
        })
    },[]);
    const handleSearch = (e, name) => {
       e.preventDefault();
       const searchText = e.target.search.value;
       console.log(searchText);
    }
    // const foodDetails = () =>{

    // }
    return (
        <div>
            <h2 className="text-4xl text-center font-bold text-pink-500 pt-20">Our All Foods</h2>
            <p className="w-full md:w-[80%] lg:w-[70%] mx-auto text-center my-2 text-[16px]">Burger, pasta, sandwich, steak, soup, and salad are all culinary delights that offer a blend of flavors and textures. From the savory satisfaction of a well-grilled steak to the comforting warmth of a hearty soup, each dish provides a unique dining experience, catering to diverse palates and preferences</p>
            <div>
            <form onSubmit={handleSearch} className="flex justify-center gap-2 mb-5">
            <input type="text"  name="search" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
            <button className="btn ghost px-10 badge bg-pink-400"><input type="submit" value="Search" />
            </button>
            </form>
            </div>
             <div className="grid grid-cols-1 w-full mx-auto md:grid-cols-2 lg:grid-cols-3 gap-9">
            {
                foods.map((food, idx) =><Food key={idx} food={food}></Food>)
            }
            </div>
        </div>
    );
};

export default AllFoods;