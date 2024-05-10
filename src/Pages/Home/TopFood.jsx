
const TopFood = ({food}) => {
    const {food_name,image_url,category,price } = food
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{food_name}</h2>
                <p>{category}</p>
                <div className="card-actions">
                     <p>Price: ${price}</p>
                    <button className="badge badge-outline badge-secondary p-3 hover:bg-black">Details</button>
                </div>
            </div>
        </div>
    );
};

export default TopFood;