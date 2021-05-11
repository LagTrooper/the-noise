import './Navbar.css';

function Navbar() {
    return (
        <div class="wrapper">
            <nav>
                <input type="checkbox" id="show-search" />
                <input type="checkbox" id="show-menu" />
                <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
                <div class="content">
                    <div class="logo">
                        <a href="#">Logo</a>
                    </div>
                    <ul class="links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Final</a></li>
                        <li>
                            <a href="#" class="desktop-link">Candidats</a>
                            <input type="checkbox" id="show-candidats" />
                            <label for="show-candidats">Candidats</label>
                            <ul>
                                <li><a href="#">Candidat 1</a></li>
                                <li><a href="#">Candidat 2</a></li>
                                <li><a href="#">Candidat 3</a></li>
                                <li><a href="#">Candidat 4</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
            </nav>
        </div>
    )
};

export default Navbar;