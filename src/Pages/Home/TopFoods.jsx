import axios from "axios";
import { useEffect, useState } from "react";
import TopFood from "./TopFood";
import { Link } from "react-router-dom";

const TopFoods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/foods/six?size=6&sort=-1')
            .then(res => {
                setFoods(res.data)

            })
    }, []);
    console.log(foods);
    // http://localhost:5000/foods/six?size=6&sort=-1
    console.log(foods.foodName);
    return (
        <div>
            <h2 className="text-4xl text-center font-bold text-pink-500 my-10">Most Sells Foods</h2>
            <div className="grid grid-cols-1 w-full mx-auto md:grid-cols-2 lg:grid-cols-3 gap-9">
                {
                    foods.slice(0, 6).map((food, idx) => <TopFood key={idx} food={food}></TopFood>)
                }
            </div>
            <Link className="flex justify-center my-5" to='/allfoods'><button className="btn btn-primary font-bold text-xl">See all food</button>
                </Link>

        </div>
    );
};

export default TopFoods;