import { Link, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
    const food = useLoaderData();
    const { foodName, name, _id, photo, foodCategory, price, origin, quantity, description} = food;
    return (
        <div className="bg-gray-300 pt-24">
             <h2 className="text-3xl font-bold text-center pt-4">{foodName}</h2>
        <p className="pt-2 text-center">{description}</p>
        <div className=" flex flex-col md:flex-row lg:flex-row justify-center items-center p-10 mx-auto">
            
        <figure className=" w-full">
            <img src={photo} alt="food" className="rounded-xl border border-yellow-400" />
        </figure>
        <div className="pl-10 items-center w-full text-[18px]">
       <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between">
       <h2 className="text-3xl font-bold pt-4">Food Name: {foodName}</h2>
        <div>
            {
                quantity ? <button className="badge badge-outline badge-secondary p-3 text-2xl font-bold">Available</button> : <button className=" text-end text-2xl font-bold badge text-white badge-outline bg-red-500 p-4">SoldOut</button>
             }
            </div>
       </div>
        <p className="pt-2"><span className="font-bold">Description :</span>{description}</p>
            <p className='py-3 text-xl'><span className="font-bold">Food Category </span>: {foodCategory}</p>
            <div className="flex justify-start gap-5 mb-2">
            <p className='py-1'><span className="font-bold">Origin :</span> {origin}</p>
            <p className='py-1'> <span className="font-bold py-2">Quantity : </span>{quantity}</p>
            </div>
            <p className="py-3"><span className="font-bold">Price: </span>${price}</p>
            <p><span className="font-bold">Made by : </span>{name}</p>
            
            <div className="card-actions pb-5 pt-2">
            <button disabled={quantity ===0} className="btn bg-purple-500 text-white hover:bg-black"><Link to={`/purchasefood/${_id}`}>Purchase</Link></button>
            </div>
        </div>
    </div>
        </div>
           
    );
};

export default FoodDetails;