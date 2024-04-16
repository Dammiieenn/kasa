import React from "react";
import UseUtilitaire from "../UseUtilitaire";
import "../styles/logement.css";
import image from "../image/image1.png";

export default function Logement() {
  const { data, loading, error } = UseUtilitaire("./logements.json");

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(data);

  return (
    <div>
      <img src={image} alt="Premiere image" className="premiereImage" />
      <div className="imageLogement">
        <ul>
          {data.map((logement, index) => (
            <li key={index}>
              <h2>{logement.title}</h2>
              <img src={logement.cover} alt={logement.title} className="imageLogement" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

