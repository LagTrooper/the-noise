import { useState, useEffect } from "react";
import axios from "axios";

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
    padding: 0,
    width: '300px',
    height: '500px',
    backgroundColor: '#fff',
    border: '1.5px solid black',
    borderRadius: '0.5rem',
    boxShadow: '12px 12px 2px 1px rgba(46, 49, 49, 1)',
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
    background: `url(${img})center`,
    backgroundSize: 'cover',
    margin: '0 0 ',
  };

  const CardInfos = {
    display: 'flex',
    flexDirection: 'row',
  };

  const CardButton = {
    height: 'auto',
    border: 'none',
    fontSize: '1rem',
    alignSelf: 'flex-end',
    justifyself: 'flex-end',
    margin: '0.8rem',
    padding: '0.5rem',
    fontFamily: 'Rajdhani',
    fontWeight: 400,
    backgroundColor: '#fff',
    color: '#2e2c2c',
    cursor: 'pointer',
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
      <button type="button" style={CardButton} >
        Learn more...
      </button>
    </div>
  );
};

export default Card;
