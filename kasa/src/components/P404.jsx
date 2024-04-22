import React from 'react';
import "../styles/p404.css";

const P404 = () => {
    return (
        <div className='ereur404'>
            <h1>404</h1>
            <h5>Oups! La page que vous demandez n'existe pas.</h5>
            <div className='return'>
                <a href="Retourner sur la page d'accueil">Retourner sur la page d'accueil</a>
            </div>
        </div>
    );
};

export default P404;