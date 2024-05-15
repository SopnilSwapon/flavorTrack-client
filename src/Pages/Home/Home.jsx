import { Helmet } from "react-helmet";
import Banner from "./Banner";
import TopFoods from "./TopFoods";
import Residential from "./Residentital/Residential";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>FlavorTrack||Home</title>
             </Helmet>
            <Banner></Banner>
            <TopFoods></TopFoods>
            <Residential></Residential>
        </div>
    );
};

export default Home;