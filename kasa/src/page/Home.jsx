import React from "react";
import Navigation from "../components/Navigation";
import Fouter from "../components/Fouter";
import Utilitaire from "../utilitaire";


const Home = () => {
    return (
        <div>
            <Navigation />
            <Utilitaire />
            <Fouter />
        </div>
    );
};

export default Home;