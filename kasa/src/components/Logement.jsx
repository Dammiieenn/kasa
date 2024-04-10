
import utilitaire from "../utilitaire";


function Logement () {
    const { data, loading, error } = utilitaire("./Loggement.json");
  
    if (loading) return <div>Loading ...</div>;
    if (error) return <div>Error: {error}</div>;
  
    console.log(data);
  
    return <div>Logement</div>;
  };
  
  export default Logement;