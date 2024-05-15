import { useEffect, useState } from "react";
import titlePic from '../../assets/bannerFouteen.jpg'
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const Gallery = () => {
    const navigate = useNavigate();
    const {user} = useAuth()
    const [galleryFoods, setGalleryFoods] = useState([]);
    useEffect(() =>{
    fetch('https://flavortrack-server.vercel.app/gallery')
    .then(res => res.json())
    .then(data =>{
        setGalleryFoods(data)
    })
    },[])
    console.log(galleryFoods);
    const handleAddFoodGallery = e =>{
      e.preventDefault();
      const user_name = user?.displayName
      const Image_url = e.target.photo.value;
      const Feedback = e.target.feedback.value;
      const newFood = {user_name, Image_url, Feedback };
      fetch('https://flavortrack-server.vercel.app/galleryfood', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newFood)
      })
      .then(res =>res.json())
      .then(data =>{
        if(data.insertedId){
          Swal.fire({
            icon: "success",
            title: "Successfully added our gallery.",
          });
        }
      })
    }
    const handleModal = () =>{
      if(user){
         document.getElementById('my_modal_3').showModal()
      }
      else{
        return navigate('/signin')
      }
 
    }
    return (
      <div className="pt-16 bg-sky-200">
        <Helmet>
          <title>FlavorTrack||Gallery</title>
        </Helmet>
        <div className="bg-no-repeat bg-cover" style={{backgroundImage:`url(${titlePic})`}}>
        <h2 className="text-4xl font-bold text-center text-white pt-6">Add Your Favorite Food in Our Gallery</h2>
        <p className="pb-4 text-center font-bold text-white">You can add your favorite food in our section.if you want to add please scroll down and find add button.Everyone see your favorite food in our section there have mentioned your name.That will be my pleasure if you add your favorite food and share your experience also have you possible share our specialty</p>
        </div>
         <div className="pt-7 pb-4 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
     {
        galleryFoods.map(food=> <div key={food._id}>
               <div className="w-full h-64 group relative border border-red-700">
          <div className="opacity-100 w-full duration-300 absolute inset-0 bg-cover bg-center z-0 overflow-hidden" style={{backgroundImage: `url(${food.
Image_url})`}}>

                <div className="opacity-0 duration-1000 bg-black bg-opacity-50 translate-y-64  hover:opacity-100 group-hover:translate-y-0 absolute inset-0 z-10 text-white font-semibold">
                 <h2 className="flex justify-center pt-16 text-2xl">Add by : {food.user_name}</h2>
                 <p className="text-white w-[95%] text-center">{food.Feedback}</p>
                  </div>
          </div>
              </div>

        </div>)
      }
      </div>
       <div className="flex justify-center pb-5">
       <button onClick={handleModal} className="badge badge-outline p-6  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 badge-warning flex justify-end"><span className="text-white font-bold">ADD FOOD IN GALLERY</span></button>
       </div>
       {/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
    <input type="submit" value="ADD FOOD" />
    {/* <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"> */}
			<form onSubmit={handleAddFoodGallery}>
      <div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-[18px] font-bold block">USER NAME</label>
					<input type="text" disabled name="" className="p-4 outline rounded border-2 w-full" defaultValue={user?.displayName} id="" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-[18px] font-bold block">PHOTO URL</label>
					<input type="text" name="photo" required className="p-4 outline rounded border-2 w-full" placeholder="image link" id="" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-[18px] font-bold block">FeedBack</label>
					<input type="text" name="feedback" className="p-4 py-8 outline rounded border-2 w-full" placeholder="Type your experience" id="" />
				</div>
        <input className="btn bg-black text-white mt-3" type="submit" value="FOOD ADD" />
      </form>
    </div>
</dialog>

      </div>
    );
};

export default Gallery;