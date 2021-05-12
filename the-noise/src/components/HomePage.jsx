import './HomePage.css';
import LinkButton from './LinkButton';

function HomePage() {
  return (
    <div>
      <div className='text'>
        <h1 className='title-img'>The Noise: The final four! </h1>
        <img className='img-homepage'
          src='https://b2cproductionsite-be80wkthrgjjkmzuip0.netdna-ssl.com/sites/b2c/files/styles/orange_blog_in_picture/public/generated/blog/tvvv-studio-convertimage.jpg?itok=R7zYGq-r'
          alt='chairs'
        />
        <p className='final-text'>Who's gonna be the next Noise Superstar ? <br/> Stay tuned Saturday May 15th at 8PM for the grand reveal !</p>
      </div>
      <LinkButton
        to='/thefinal'
        onClick={(event) => {
          console.log('custom event here!', event);
        }}
      >
        Vote Now !!
      </LinkButton>
      <div className='replay'>
        <h2 className="video-text">Replay :</h2>
        <div className='video-replay'>
          <iframe
            width='300'
            height='200'
            src='https://www.youtube.com/embed/KohuGg4AFeE'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          <iframe
            width='300'
            height='200'
            src='https://www.youtube.com/embed/fn3KWM1kuAw'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          <iframe
            width='300'
            height='200'
            src='https://www.youtube.com/embed/DGkUbvPsgNY'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          <iframe
            width='300'
            height='200'
            src='https://www.youtube.com/embed/kHBcVlqpvZ8'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
