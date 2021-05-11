import './Navbar.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div class='wrapper'>
      <nav>
        <input type='checkbox' id='show-search' />
        <input type='checkbox' id='show-menu' />
        <label for='show-menu' class='menu-icon'>
          <i class='fas fa-bars'></i>
        </label>
        <div class='content'>
          <img classname='logo' src={logo} alt='' />
          <ul class='links'>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/thefinal`}>Final</Link>
            </li>
            <li>
              <Link to={``} class='desktop-link'>
                Candidats
              </Link>
              <input type='checkbox' id='show-features' />
              <label for='show-features'>Candidats</label>
              <ul>
                <li>
                  <Link to={`/rover-profile/Curiosity`}>Curiosity</Link>
                </li>
                <li>
                  <Link to={`/rover-profile/Opportunity`}>Opportunity</Link>
                </li>
                <li>
                  <Link to={`/rover-profile/Perseverance`}>Perseverance</Link>
                </li>
                <li>
                  <Link to={`/rover-profile/Spirit`}>Spirit</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
