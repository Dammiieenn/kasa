import React from "react";
import UseUtilitaire from "../UseUtilitaire";
import "../styles/logement.css";
import { Link } from "react-router-dom";

export default function Logement() {
  const { data, loading, error } = UseUtilitaire("./logements.json");

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="PremiereImage">
      </div>
      <h4>Chez vous, partout et ailleurs</h4>
      <div className="imageLogement">
        <ul className="galerie">
          {data.map((item) => (
            <li key={item.id}>
              <Link to={`/Detail/${item.id}`}>
                <div className="item" appartement={item}>
                  <img src={item.cover} alt="appartement"></img>
                  <h3 className="title"> {item.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};



/////////ce code ouvre une nouvelle fenetre en cliquant sur une image//////////////

// import React from "react";
// import UseUtilitaire from "../UseUtilitaire";
// import "../styles/logement.css";

// function ClickableImage({ src, alt, link }) {
//   const handleImageClick = () => {
//     window.open(link, "_blank");
//   };

//   return (
//     <img
//       src={src}
//       alt={alt}
//       onClick={handleImageClick}
//       style={{ cursor: "pointer" }}
//     />
//   );
// }

// export default function Logement() {
//   const { data, loading, error } = UseUtilitaire("./logements.json");

//   if (loading) return <div>Loading ...</div>;
//   if (error) return <div>Error: {error}</div>;

//   console.log(data);

//   return (
//     <div>
//       <div className="PremiereImage"></div>
//       <h4>Chez vous, partout et ailleurs</h4>
//       <div className="imageLogement">
//         <ul>
//           {data.map((logement, index) => (
//             <li key={index}>
//               <h2>{logement.title}</h2>
//               <ClickableImage src={logement.cover} alt={logement.title} link={logement.link} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }