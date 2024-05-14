import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateFood = () => {
const food = useLoaderData()
   const {foodName,photo,foodCategory,price, quantity, description, _id} = food;
    const handleUpdateFood = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.name.value;
        const foodCategory = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const food = {foodName, foodCategory, quantity, price, description, photo};
        console.log(food);
       fetch(`https://flavortrack-a59b2.firebaseapp.com/foods/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(food)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.modifiedCount){
            Swal.fire({
                icon: "success",
                title: "YAY",
                text: "This food Successfully Update!",
        })}
       })
    }
    return (
        <div>
    <section className="p-6 bg-gray-400 dark:text-gray-900">
        <h2 className="text-3xl text-center font-extrabold pt-16 text-white">Update the Food</h2>
<form onSubmit={handleUpdateFood} className="container flex flex-col mx-auto">
    <fieldset className="gri grid-cols-4 gap-6 p-6 pt-0 rounded-md shadow-sm dark:bg-gray-50">
        <div className="space-y-2 col-span-full lg:col-span-1">
        </div>
        <div className="w-2/3 mx-auto space-y-2">
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sky-300 text-xl">Food Name :</label>
                <input type="text" name="name" defaultValue={foodName}  className="w-full pl-3 py-2" />
            </div>
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sky-300 text-xl">Food Category :</label>
                <input type="text" name="category" defaultValue={foodCategory} className="w-full pl-3 py-2" />
            </div>
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sky-300 text-xl">Quantity :</label>
                <input type="text" name="quantity" defaultValue={quantity} className="w-full pl-3 py-2" />
            </div>
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sky-300 text-xl">Price :</label>
                <input type="text" name="price" defaultValue={price} className="w-full pl-3 py-2" />
            </div>
            <div className="col-span-full ">
                <label htmlFor="firstname" className="text-sky-300 text-xl">Photo URL :</label>
                <input type="text" name="photo" defaultValue={photo} className="w-full pl-3 py-2" />
            </div>
            <div className="col-span-full ">
                <label htmlFor="firstname" className="text-sky-300 text-xl">Description :</label>
                <input type="text" name="description" defaultValue={description} className="w-full pl-3 py-2" />
            </div>
            <div className="flex justify-center">
                <button className="btn ghost px-10"><input type="submit" value="Update Food" />
                </button>
            </div>
        </div>
    </fieldset>
</form>
</section>
    </div>
    );
};

export default UpdateFood;