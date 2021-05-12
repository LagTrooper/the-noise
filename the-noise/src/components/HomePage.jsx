import './HomePage.css';
import LinkButton from './LinkButton';

function HomePage() {

    return (
        <div >
            <div className="text">
                <h1>This is the Noise !!</h1>
                <p>explication text mother fucker</p>
            </div>
            <LinkButton to='/thefinal'
                onClick={(event) => {console.log('custom event here!', event) }}>
                Vote Now !!
            </LinkButton>

        </div>
    )
}

export default HomePage;