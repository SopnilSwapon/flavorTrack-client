import axios from "axios";
import { useEffect, useState } from "react";
import Room from "./Room";

const Residential = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        axios('residential.json')
            .then(result => {
                setRooms(result.data)
            })
    }, [])
    console.log('thee ahve' , rooms);
    return (
        <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">Restaurant Residency</h2>
            <p className="  w-[95%] md:w-[90%] lg:w-[80%] mx-auto text-center my-3">Extend your culinary adventure with our exclusive Residential Dining Experience at Flavortrack Restaurant. Enjoy gourmet meals prepared by expert chefs, unwind in luxurious accommodations, and experience personalized service. Perfect for special occasions or a weekend getaway, our residential packages offer a unique blend of fine dining and comfortable stay. Book now and indulge in an unforgettable gastronomic journey</p>
            <div className="grid grid-cols-1 mb-12 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {
                rooms.map((room,idx) => <Room key={idx} room={room}></Room>)
            }
            </div>
        </div>
    );
};

export default Residential;