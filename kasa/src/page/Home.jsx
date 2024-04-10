import React from "react";
import Navigation from "../components/Navigation";
import Fouter from "../components/Fouter";
import Logement from "../components/Logement";



const Home = () => {
    return (
        <div>
            <Navigation />
            <Logement />
            <Fouter />
        </div>
    );
};

export default Home;