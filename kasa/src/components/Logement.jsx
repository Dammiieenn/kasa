import React from "react";
import UseUtilitaire from "../UseUtilitaire";
import "../styles/logement.css";

export default function Logement() {
  const { data, loading, error } = UseUtilitaire("./logements.json");

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(data);

  return (
    <div>
    <div className="PremiereImage">
    </div>
      <h4>Chez vous, partout et ailleurs</h4>
      <div className="imageLogement">
        <ul>
          {data.map((logement, index) => (
            <li key={index}>
              <h2>{logement.title}</h2>
              <a href={logement.link} target="_blank" rel="noopener noreferrer" />
              <img src={logement.cover} alt={logement.title} className="imageLogement" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}