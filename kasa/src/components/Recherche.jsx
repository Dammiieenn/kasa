import React from 'react';
import "../styles/recherche.css";

const Recherche = () => {
    return (
        <div>
            <div className='DeuxiemeImage'>
            </div>
            <div className="Collapse">
                <button type="button" className="collapsible">Flabilité</button>
                <button type="button" className="collapsible">Respect</button>
                <button type="button" className="collapsible">Service</button>
                <button type="button" className="collapsible">Sécurité</button>
            </div>
        </div>
    );
};

export default Recherche;