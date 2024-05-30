import axios from "axios";
import { useEffect, useState } from "react";
import Food from "./Food";
import SearchFoods from "./SearchFoods";
import { NavLink, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import titelBar from '../../assets/allfod6.jpg'
const AllFoods = () => {
    const [haveNotSeachFood, setHaveNotSeachFood] = useState(true)
    const [searchFood, setSearchFood] = useState(null)
    const [foods, setFoods] = useState([]);
    const [foodPerPage, setFoodPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    const {count} = useLoaderData();
    const numberOfpages = Math.ceil(count / foodPerPage);
    const handlePrePage = () =>{
        if(currentPage > 0){
            setCurrentPage(currentPage - 1)
        }
    }
    const pages = [...Array(numberOfpages).keys()];
    const handleFoodPerPage = e =>{
        const value = parseInt(e.target.value);
        setFoodPerPage(value);
        setCurrentPage(0)
    }
    const handleNextPage = () =>{
        if(currentPage <pages.length - 1){
            setCurrentPage(currentPage + 1);
        }
    }
    useEffect(()=>{
        axios.get(`https://flavortrack-server.vercel.app/foods?page=${currentPage}&&size=${foodPerPage}`)
        .then(res => {
            setFoods(res.data);
            setHaveNotSeachFood(true)
        })
    },[currentPage, foodPerPage]);
    const handleSearch = e => {

        e.preventDefault();
        let searchField = e.target.search.value;
           searchField = searchField.charAt(0).toUpperCase() + searchField.slice(1);

        axios.get(`https://flavortrack-server.vercel.app/foods/search/${searchField}`)
        .then(res =>{
            setSearchFood(res.data);
            setHaveNotSeachFood(false)
        })
       
    }
    
    return (
        <div className="min-h-[calc(100vh-277px)]">
            <Helmet>
                <title>FlavorTrack||Foods</title>
            </Helmet>
            <div style={{backgroundImage: `url(${titelBar})`}} className="pt-24">
            <h2 className="text-4xl text-center pt-2 font-bold text-pink-500">Our All Foods</h2>

            <p className="w-full pb-4 md:w-[80%] lg:w-[70%] mx-auto text-center my-2 text-[16px] text-white">Burger, pasta, sandwich, steak, soup, and salad are all culinary delights that offer a blend of flavors and textures. From the savory satisfaction of a well-grilled steak to the comforting warmth of a hearty soup, each dish provides a unique dining experience, catering to diverse palates and preferences</p>
            <div>
            <form onSubmit={handleSearch} className="flex justify-center pb-5 gap-2 mb-5">
            <input type="text"  name="search" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
            <button className="btn ghost px-10 badge bg-pink-400"><input type="submit" value="Search" />
            </button>
            </form>
            </div>
            </div>
             <div className="grid grid-cols-1 w-full mx-auto md:grid-cols-2 lg:grid-cols-3 gap-9">
            {
               haveNotSeachFood ?  
                <>
               {
                    foods.map((food, idx) =><Food key={idx} food={food}></Food>)
                }
              </>
              :
              <>
               {
                searchFood.length > 0 ? <> {
                    searchFood.map((food, idx) =><SearchFoods key={idx} food={food}></SearchFoods>)
                       }</>
                : 
                   <div className=" lg:col-span-3 md:col-span-3">
                     <h2 className="text-black py-10 text-4xl md:text-6xl lg:text-7xl font-bold text-center">Have not found</h2>
                     <div className="text-center">
                     <button className="btn opacity-70 btn-primary p-3"><NavLink to='/'>Go Home</NavLink></button>
                     </div>

                   </div>
               }
              </> 
            }
            </div>
            <div className="my-4 flex justify-center gap-2">
                <button onClick={handlePrePage} className="btn btn-sm">pre</button>
                {
                    pages.map(page =><button 
                        onClick={()=>setCurrentPage(page)}
                        className={`btn btn-sm ${currentPage === page ? 'bg-pink-500 text-white' : ''}`}
                         key={page}
                         >{page}</button>)
                }
                <select value={foodPerPage} name="" id="" onChange={handleFoodPerPage}>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                </select>
                <button onClick={handleNextPage} className="btn btn-sm">next</button>
            </div>
        </div>
    );
};

export default AllFoods;