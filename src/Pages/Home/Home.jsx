import { Helmet } from "react-helmet";
import Banner from "./Banner";
import TopFoods from "./TopFoods";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>FlavorTrack||Home</title>
             </Helmet>
            <Banner></Banner>
            <TopFoods></TopFoods>
        </div>
    );
};

export default Home;