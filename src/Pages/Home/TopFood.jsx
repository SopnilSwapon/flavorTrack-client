import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const TopFood = ({food}) => {

   const {foodName,photo,foodCategory,price, _id} = food;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="pt-4">
                <img src={photo} alt="Shoes" className="rounded-xl w-[85%] md:w-[360px] lg:w-[350px] h-[320px] md:h-[200px] lg:h-[200px]" />
            </figure>
            <div className="pl-10 items-center">
                <h2 className="card-title py-2">Food Name: {foodName}</h2>
                <p className='py-1 text-xl'>Food Category : {foodCategory}</p>
                <div className="card-actions pb-5">
                     <p>Price: ${price}</p>
                    <Link to={`/fooddetails/${_id}`}><button className="badge badge-outline badge-secondary p-3 hover:bg-black">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TopFood;
TopFood.propTypes = {
    food: PropTypes.object
}