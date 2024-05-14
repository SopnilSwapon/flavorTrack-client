import PropTypes from 'prop-types'
import Swal from 'sweetalert2';
const MyFoodRow = ({food}) => {
    const {foodName,photo,price, 
        foodOwner, date,_id} = food;

        const handleDeleteFood = () =>{
            Swal.fire({
                title: "Are you sure?",
                text: "You want to delete this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              })
              .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://flavortrack-a59b2.firebaseapp.com/purchase/${_id}`, {
                method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                if(data.deletedCount){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your food has been deleted.",
                    icon: "success"
                })
            } 
        })
    }
            })
        };
            

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
          <p>{foodName}</p>
        </td>
        <td>${price}</td>
        <td>{date}</td>
        <td>{foodOwner}</td>
        <th>
            <button onClick={handleDeleteFood} className="btn text-2xl opacity-80 text-white bg-red-500">X</button>
            
        </th>
      </tr>
    );
};

export default MyFoodRow;
MyFoodRow.propTypes = {
    food: PropTypes.object
}