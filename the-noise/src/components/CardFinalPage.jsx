import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ name, img }) => {
  const [infosRover, setInfosRover] = useState([]);

  useEffect(() => {
    axios
      .get(`https://mars-photos.herokuapp.com/api/v1/manifests/${name}`)
      .then((response) => response.data)
      .then((data) => {
        setInfosRover(data.photo_manifest);
      });
  }, []);

  const CardContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '10px',
    width: '300px',
    height: '500px',
    backgroundColor:'rgba(255, 255, 255, 0.596)',
    border: '1.5px solid black',
    borderRadius: '0.5rem',
    marginBottom: '20px',
    marginTop: '20px'
  };

  const CardTitle = {
    fontSize: "1.5rem",
    fontFamily: "Rajdhani",
    fontWeight: "500",
    color: "#2e2c2c",
    margin: "0.5rem auto",
    padding: "0 0.5rem",
  };

  const ImgCardHeader = {
    width: '100%',
    height: '75%',
    borderRadius:'5%',
    background: `url(${img})center`,
    backgroundSize: 'cover',
    margin: '0 0 ',
  };

  const CardInfos = {
    display: 'flex',
    flexDirection: 'row',
  };

  const CardButton = {
   height: '2em',
   borderRadius: '5px',
   marginLeft: '100px',
   marginTop: '20px',
   border: 'none',
   fontSize: '0.9rem',
   fontFamily: 'Rajdhani'
  };
//   const CardStatus = {
//     fontSize: '0.9rem',
//     fontFamily: 'Rajdhani',
//     fontWeight: 300,
//     color: '#2e2c2c',
//     margin: 0,
//     padding: '0 1rem',
//   };

  return (
    <div style={CardContainer}>
      <h1 style={CardTitle}>{name}</h1>
      <div style={ImgCardHeader} />
      <Link to={`/rover-profile/${name}`}>
      <button type="button" style={CardButton}>
        Learn more...
      </button>
      </Link>
    </div>
  );
};

export default Card;
