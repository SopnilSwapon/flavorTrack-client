
const Food = ({food}) => {
    const {food_name,image_url,category,price, quantity } = food;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl w-[300px] h-[200px]" />
            </figure>
            <div className="pl-10 items-center">
                <h2 className="card-title pt-4 pb-2">Food Name: {food_name}</h2>
                <p className='py-1 text-xl'>Food Category : {category}</p>
                <div className="flex justify-start gap-5 mb-2">
                <p className='py-1'>Quantity : {quantity}</p>
                <p>Price: ${price}</p>
                </div>
                <div className="card-actions pb-5">
                     
                    <button className="badge badge-outline badge-secondary p-3 hover:bg-black">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Food;