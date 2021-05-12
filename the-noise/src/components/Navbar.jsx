import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <div class='wrapper'>
      <nav>
        <label for='show-menu' class='menu-icon'>
          <i class='fas fa-bars'></i>
        </label>
        <div class='content'>
          <img classname='logo' src={logo} alt='' />
          <ul class='links'>
          <div className="separator">{null}</div>
            <li>
              <Link to={`/`}>Home</Link>{' '}
            </li>
            <li>
              <Link to={`/thefinal`}>The Final</Link>
            </li>
            <li>
              <Link to={`/rover-profile/Curiosity`}>#Curiosity</Link>
            </li>
            <li>
              <Link to={`/rover-profile/Opportunity`}>#Opportunity</Link>
            </li>
            <li>
              <Link to={`/rover-profile/Perseverance`}>#Perseverance</Link>
            </li>
            <li>
              <Link to={`/rover-profile/Spirit`}>#Spirit</Link>
            </li>
          </ul>
          <div className="separator">{null}</div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
