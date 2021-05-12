import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div class='footer-basic'>
      <ul class='list-inline'>
        <li class='list-inline-item'>
          <Link to={`/`}>Home</Link>{' '}
        </li>
        <li class='list-inline-item'>
          <Link to={`/thefinal`}>The Final</Link>
        </li>
        <li class='list-inline-item'>
          <Link to={`/rover-profile/Curiosity`}>Curiosity</Link>
        </li>
        <li class='list-inline-item'>
          <Link to={`/rover-profile/Opportunity`}>Opportunity</Link>
        </li>
        <li class='list-inline-item'>
          <Link to={`/rover-profile/Perseverance`}>Perseverance</Link>
        </li>
        <li class='list-inline-item'>
          <Link to={`/rover-profile/Spirit`}>Spirit</Link>
        </li>
      </ul>
      <p class='copyright'>The Noise WildCodeSchool © 2021</p>
    </div>
  );
};

export default Footer;
