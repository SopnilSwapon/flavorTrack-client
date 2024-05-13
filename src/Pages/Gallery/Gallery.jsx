import { useState } from "react";
import titlePic from '../../assets/bannerFouteen.jpg'

const Gallery = () => {
    const [galleryFoods, setGalleryFoods] = useState([]);
    fetch('http://localhost:5000/gallery')
    .then(res => res.json())
    .then(data =>{
        setGalleryFoods(data)
    })
    console.log(galleryFoods);
    return (
      <div className="pt-16">
        <h2 style={{backgroundImage:`url(${titlePic})`}} className="text-4xl font-bold text-center bg-no-repeat bg-cover text-white opacity-100 bg-gray-300 pt-10 py-10">Add Your Favorite Food in Our Gallery</h2>
         <div className="pt-7 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
     {
        galleryFoods.map(food=> <div key={food._id}>
               <div className="w-full h-64 group relative">
          <div className="opacity-100 w-full duration-300 absolute inset-0 bg-cover bg-center z-0 overflow-hidden" style={{backgroundImage: `url(${food.
Image_url})`}}>

                <div className="opacity-0 duration-1000 bg-black bg-opacity-50 translate-y-64  hover:opacity-100 group-hover:translate-y-0 absolute inset-0 z-10 text-white font-semibold">
                 <h2 className="flex justify-center pt-16 text-2xl"> {food.user_name}</h2>
                 <p className="text-white w-[95%] mx-auto">{food.Feedback}</p>
                  </div>
          </div>
              </div>

        </div>)
      }
     {/* </div> */}
      </div>


      </div>
    );
};

export default Gallery;