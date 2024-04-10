import React from "react";
import Navigation from "../components/Navigation";
import Fouter from "../components/Fouter";
import utilitaire from "../utilitaire";


const Home = () => {
    return (
        <div>
            <Navigation />
            <utilitaire />
            <Fouter />
        </div>
    );
};

export default Home;