import useAuth from "../../Hooks/useAuth";
import moment from "moment";

const PurchaseFood = () => {
    const { food, user } = useAuth();
    const { foodName, photo, foodCategory, description, price, quantity:original_Quantity, _id, name } = food;
    
    console.log(food);
    console.log(typeof original_Quantity);
    const handlePurchase = e =>{
        e.preventDefault();
    
        const foodOwner = name;
        const date = moment().format("YYYY-MM-DD HH:mm:ss");
        const purchaseQuantity = parseInt(e.target.quantity.value);
        const quantity = original_Quantity - purchaseQuantity;
        const newFood = {foodOwner, photo, foodName, price, date, };
        const updateFood = {foodName, foodCategory, quantity, price, description, photo};

        console.log("new food", newFood);
        // console.log('update quantity', newQuantity);
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newFood)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            alert('successfully added foods')
        });

        //_______update food___________//
        const food = {foodName, foodCategory, quantity, price, description, photo};
        console.log(food);
       fetch(`http://localhost:5000/foods/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateFood)
       })
       .then(res => res.json())
       .then(data =>{
        if(data.modifiedCount){
            alert('update successful')
        }
       })
        
    }
    return (
        <div className="pt-24 bg-gray-400">
            <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
                <div className="flex flex-col p-6">
                    <div>
                    </div>
                    <h2 className="text-xl font-semibold text-sky-300 pt-12 pb-2">Food Name: {foodName}</h2>
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
                    <h2 className="text-3xl font-bold text-center text-white">Please fill up the form</h2>
                    <section className=" bg-gray-400 dark:text-gray-900">
                        <form onSubmit={handlePurchase} className="container flex flex-col mx-auto space-y-12">
                            <fieldset className="gri grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                </div>
                                <div className="w-2/3 mx-auto">
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstname" className="text-sky-300 text-xl">Food Name :</label>
                                        <input type="text" defaultValue={foodName} name="name" className="w-full pl-3 py-2" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstname" className="text-sky-300 text-xl">Buyer Name :</label>
                                        <input type="text" defaultValue={user?.displayName} name="buyer" className="w-full pl-3 py-2" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstname" className="text-sky-300 text-xl">Quantity :</label>
                                        <input type="text" defaultValue={original_Quantity} name="quantity" className="w-full pl-3 py-2" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstname" className="text-sky-300 text-xl">Price :</label>
                                        <input type="text" defaultValue={price} name="price" className="w-full pl-3 py-2" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstname" className="text-sky-300 text-xl">Buyer Email :</label>
                                        <input type="text" defaultValue={user?.email} name="email" className="w-full pl-3 py-2" />
                                    </div>
                                    <div className="col-span-full ">
                                        <label htmlFor="firstname" className="text-sky-300 text-xl">Buying Date :</label>
                                        <input type="text" defaultValue={'22-02-24'} name="date" className="w-full pl-3 py-2" />
                                    </div>
                                    <div className="flex justify-center">
                                        <button className="btn bg-pink-500 text-white font-bold mt-2 px-10"><input type="submit" value="Purchase" />
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