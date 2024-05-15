import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import moment from "moment";
import Swal from "sweetalert2";

const PurchaseFood = () => {
    const { user } = useAuth();
    const food = useLoaderData();
    const { foodName, photo, foodCategory, purchase:currentPurchase, price, quantity: original_Quantity,email, _id, name, description } = food;
    
    const handlePurchase = e => {
        e.preventDefault();

        const foodOwner = name;
        const date = moment().format("YYYY-MM-DD HH:mm:ss");
        const purchaseQuantity = parseInt(e.target.quantity.value);
        const buyer_email = user?.email
        const quantity = original_Quantity - purchaseQuantity;
         let purchase = currentPurchase + purchaseQuantity;
        const newFood = { foodOwner,buyer_email, photo, foodName, price, date, };
        const updateFood = { foodName, purchase, foodCategory, quantity, price, description, photo };
        if(user?.email == email ){
            return Swal.fire({
                icon: "error",
                title: "This is your food",
                text: "You should not buy this food",
        })
        }
        // console.log('update quantity', newQuantity);
        if (quantity < 0) {
           return Swal.fire({
                icon: "error",
                title: "sorry",
                text: "You haven't enough food!",
        })
        }
        
        //_________ purchase food_______________ //
        fetch('https://flavortrack-server.vercel.app/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newFood)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
             Swal.fire({
                    icon: "success",
                    title: "YAY",
                    text: "You have purchased successfully!",
            })}
        })
        //_______update food___________//
        fetch(`https://flavortrack-server.vercel.app/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div className="pt-24 bg-gray-400">
            <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
                <div className="flex flex-col p-6">
                    <div>
                    </div>
               <div className="flex flex-col justify-between md:flex-row lg:flex-row items-center">
               <h2 className="text-xl font-semibold text-sky-300 pt-12 pb-2">Food Name: {foodName}</h2>
                    <div>
            {
                original_Quantity ? <button className="badge badge-outline badge-primary p-3 text-2xl text-end font-bold">Available</button> : <button className=" text-end text-2xl font-bold badge text-white badge-outline bg-red-500 p-4">SoldOut</button>
             }
               </div>
            </div>
                    <div className=" bg-gray-200 p-2 rounded-md">
                        <img src={photo} alt="" className="rounded-sm mx-auto" />
                    </div>
                    <div className="items-center">

                        <p className='py-1 text-xl text-sky-300'>Food Category : {foodCategory}</p>
                        <div className="flex justify-start gap-5 mb-2">
                            <p className='py-1 text-sky-300'>Quantity : {original_Quantity}</p>
                            <p className="pt-1 text-sky-300">Price: ${price}</p>
                        </div>
                    </div>

                </div>
                <div className="w-full">
                    <h2 className="text-3xl font-bold text-center text-white">Please check the form</h2>
                    <section className=" bg-gray-400 dark:text-gray-900">
                        <form onSubmit={handlePurchase} className="container flex flex-col mx-auto space-y-12">
                            <fieldset className="gri grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                </div>
                                <div className="w-2/3 mx-auto">
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstname" className="text-sky-300 text-xl">Food Name :</label>
                                        <input type="text" disabled defaultValue={foodName} name="name" className="w-full pl-3 py-2" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstname" className="text-sky-300 text-xl">Buyer Name :</label>
                                        <input type="text" disabled defaultValue={user?.displayName} name="buyer" className="w-full pl-3 py-2" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstname" className="text-sky-300 text-xl">Quantity :</label>
                                        <input type="text" defaultValue={original_Quantity} name="quantity" className="w-full pl-3 py-2" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstname" className="text-sky-300 text-xl">Price :</label>
                                        <input type="text" defaultValue={price} name="price" disabled className="w-full pl-3 py-2" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstname" className="text-sky-300 text-xl">Buyer Email :</label>
                                        <input type="text" disabled defaultValue={user?.email} name="email" className="w-full pl-3 py-2" />
                                    </div>
                                    <div className="flex justify-center">
                                        <button disabled={original_Quantity ===0} className={`btn bg-pink-500 text-white font-bold mt-2 px-10`}><input type="submit" value="Purchase" />
                                        </button>
                                    </div>

                                </div>
                            </fieldset>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PurchaseFood;