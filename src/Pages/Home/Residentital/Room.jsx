import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const Room = ({room}) => {
    return (
        <div>
   
   
         <div className="card bg-base-100 shadow-xl">
             <figure><img src={room.image} alt="Shoes" /></figure>
             <div className="card-body">
                 <h2 className="text-xl font-bold">Category : {room.Category_name}</h2>
                 <p className="text-[16px]">{room.description}</p>
                 <p className="text[18px]"> <span className="font-bold">Price : </span>${room.price} per day</p>
                 <div className="card-actions justify-end">
                    <Link to='/contact'><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 text-white">Book <FaArrowRight></FaArrowRight></button></Link>
                 </div>
             </div>
         </div>
        </div>
    );
};

export default Room;
Room.propTypes = {
    room: PropTypes.object
}