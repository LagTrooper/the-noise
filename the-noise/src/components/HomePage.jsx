import './HomePage.css';
import LinkButton from './LinkButton';

function HomePage() {

    return (
        <div>
            <div className="text">
                <h1 className="title-img">The noise: The final four. </h1>
                <img src="https://b2cproductionsite-be80wkthrgjjkmzuip0.netdna-ssl.com/sites/b2c/files/styles/orange_blog_in_picture/public/generated/blog/tvvv-studio-convertimage.jpg?itok=R7zYGq-r" alt="chairs" />
                <p className="final-text">Who's gonna be the next noise superstar ? </p>
            </div>
            <LinkButton to='/thefinal'
                onClick={(event) => {console.log('custom event here!', event) }}>
                Vote Now !!
            </LinkButton>

        </div>
    )
}

export default HomePage;