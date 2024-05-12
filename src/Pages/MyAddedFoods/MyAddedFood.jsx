import { BiSolidEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const MyAddedFood = ({food}) => {
    const {foodName,photo,price, quantity, _id} = food;
    return (
            <tr>
      
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className=" rounded-lg w-24 h-24">
              <img src={photo} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <p> {foodName}</p>
      </td>
      <td>{quantity}</td>
      <td>{price}</td>
      <th>
          <button className="btn btn-circle text-3xl 
          btn-sm"><Link to={`/updatefood/${_id}`}>
          <BiSolidEdit /> </Link>
          </button>
          
      </th>
    </tr>
    );
};

export default MyAddedFood;
MyAddedFood.propTypes = {
  food: PropTypes.object
}