import './Navbar.css';

function Navbar() {
    return (
        <div class="wrapper">
            <nav>
                <input type="checkbox" id="show-search" />
                <input type="checkbox" id="show-menu" />
                <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
                <div class="content">
                    <div class="logo"><a href="#">Logo</a></div>
                    <ul class="links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Final</a></li>
                        <li>
                            <a href="#" class="desktop-link">Candidats</a>
                            <input type="checkbox" id="show-features" />
                            <label for="show-features">Candidats</label>
                            <ul>
                                <li><a href="#">Candidats 1</a></li>
                                <li><a href="#">Opportunity</a></li>
                                <li><a href="#">Perseverance</a></li>
                                <li><a href="#">Spirit</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>                  
    )
};

export default Navbar;