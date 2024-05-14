import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";

const AddFoodItem = () => {
    const {user} = useAuth();
    const email = user?.email;
    const name = user?.displayName;
    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.name.value;
        const foodCategory = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const origin = form.country.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const food = {foodName, foodCategory, quantity, price, origin, description, photo, email, name};
        console.log(food);
       fetch('https://flavortrack-server.vercel.app/food', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(food)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                icon: "success",
                title: "YAY",
                text: "This food Successfully added!",
        })}
       })
    }
    return (
        <div>
            <Helmet>
            <title>Profile||Add</title>
            </Helmet>
            <h2 className="text-3xl text-center font-extrabold pt-24 text-purple-600 mb-5">Add Your Favorite Food</h2>
            <p className="w-full md:w-[80%] lg:w-[70%] mx-auto text-center my-2 text-[16px]">You can add any types of foods.If you want to add food you have fill up this below form.If you add any food then you will see this food in all foodPages also see you added form.</p>
        <section className="p-6 bg-gray-400 dark:text-gray-900">
	<form onSubmit={handleAddFood} className="container flex flex-col mx-auto space-y-12">
		<fieldset className="gri grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
			</div>
			<div className="w-2/3 mx-auto space-y-2">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-300 text-xl">Food Name :</label>
					<input type="text" name="name"  className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-300 text-xl">Food Category :</label>
					<input type="text" name="category" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-300 text-xl">Quantity :</label>
					<input type="text" name="quantity" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-300 text-xl">Price :</label>
					<input type="text" name="price" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-300 text-xl">Food Origin (country) :</label>
					<input type="text" name="country" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full ">
					<label htmlFor="firstname" className="text-sky-300 text-xl">Photo URL :</label>
					<input type="text" name="photo" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full ">
					<label htmlFor="firstname" className="text-sky-300 text-xl">Description :</label>
					<input type="text" name="description" className="w-full pl-3 py-2" />
				</div>
				<div className="flex justify-center">
                    <button className="btn ghost px-10"><input type="submit" value="Add Food" />
                    </button>
                </div>
				
			</div>
		</fieldset>
	</form>
</section>
        </div>
    );
};

export default AddFoodItem;