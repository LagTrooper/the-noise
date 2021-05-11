import CardFinalPage from './CardFinalPage';
import data from '../dto.json';
import Speech from './Speech';

const { opportunity } = data.rovers[0];
const { curiosity } = data.rovers[0];
const { perseverance } = data.rovers[0];
const { spirit } = data.rovers[0];

const FinalPage = () => {
  return (
    <>
      <CardFinalPage {...curiosity} />
      <Speech
        song="Looonelyyyy,{'                                                                     '}I'm Mister Lonelyyy,{'                                                                     '}I have noboodyyyyy {'                                                                     '}foooor my oooooooooown"
        pitch='0.2'
        rate='0.7'
      />
      <CardFinalPage {...opportunity} />
      <Speech
        song="Work it{'                                                                                    '}Make it {'                                                                                               '}Doo iit {'                                                                                    '}Makes us {'                                                                                    '}{'                                                                                    '}{'                                                                                    '}{'                                                                                    '}Harderr{'                                                                                    '}{'                                                                                    '} Betterrr {'                                                                                    '}Fasterrr{'                                                                                    '}Strongerr"
        pitch='10'
        rate='0.7'
      />
      <CardFinalPage {...perseverance} />
      <Speech
        song="This is{  }Maajor Toom to Grouunnd Control{'                                                                                                      '},I'm steppiinng through the doorr,{'                                                                                                      '}And I'm floating in a most peculiar way,{'                                                                                                      '}And the stars look very different today"
        pitch='0.5'
        rate='0.7'
      />
      <CardFinalPage {...spirit} />
      <Speech
        song="And I think it's gonna be a long long time{'                                                                                    '}'Till touch down brings me round again to find   {'                                                                                    '}I'm not the man they think I am at home   {'                                                                                    '}Oh no no no {'                                                                                    '}I'm a rocket maaaaaaaaaaaaaaaaaaaannnn    {'                                                                                    '}Rocket maaaaaaaan burning out his fuse up here alone"
        pitch='15'
        rate='0.7'
      />
    </>
  );
};

export default FinalPage;
