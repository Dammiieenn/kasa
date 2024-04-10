import React from "react";
import UseUtilitaire from "../UseUtilitaire";

  export default function Logement () {
    const { data, loading, error } = UseUtilitaire("./logements.json");
  
    if (loading) return <div>Loading ...</div>;
    if (error) return <div>Error: {error}</div>;
  
    console.log(data);
    
      return (
        <div>
          <h1>Liste des logements</h1>
          <ul>
            {data.map((logement, index) => (
              <li key={index}>
                <h2>{logement.title}</h2>
                <img src={logement.cover} alt={logement.title} />
                <h3>Photos</h3>
                <ul>
                  {logement.pictures.map((picture, pictureIndex) => (
                    <li key={pictureIndex}>
                      <img src={picture} alt={`Image ${pictureIndex + 1}`} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
  }
  
