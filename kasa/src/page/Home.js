import React from "react";
import Navigation from "../components/Navigation";
import Fouter from "../components/Fouter";
import Logo from "../components/Logo";
import Logement from "../components/Logement";

const Home = () => {
    return (
        <div>
         <Logo />
         <Navigation />
         <Logement />
         <Fouter />
        </div>
    );
};

export default Home;