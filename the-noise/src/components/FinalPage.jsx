import CardFinalPage from './CardFinalPage';
import data from '../dto.json';
import Speech from './Speech';
import {useState} from 'react';
import styled from 'styled-components'

const ContainerPage = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`
const MusicCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const TextVote = styled.p`
color: white;
font-size: 1.3em;

`

const { opportunity } = data.rovers[0];
const { curiosity } = data.rovers[0];
const { perseverance } = data.rovers[0];
const { spirit } = data.rovers[0];

const FinalPage = () => {

  const [counter1, setCounter1] = useState(1470);
  const [counter2, setCounter2] = useState(1647);
  const [counter3, setCounter3]= useState(1500);
  const [counter4, setCounter4] = useState(2314);

  return (
    <ContainerPage>
      <MusicCard>
      <CardFinalPage {...curiosity} />
      <Speech
        song="Looonelyyyy,{'                                                                     '}I'm Mister Lonelyyy,{'                                                                     '}I have noboodyyyyy {'                                                                     '}foooor my oooooooooown"
        pitch='0.2'
        rate='0.7'
      />
      <TextVote>{counter1} votes </TextVote>
      <button className="final-button" onClick={() => setCounter1(counter1 + 1)}>Vote</button>
      </MusicCard>
      <MusicCard>
      <CardFinalPage {...opportunity} />
      
      <Speech
        song="Work it{'                                                                                    '}Make it {'                                                                                               '}Doo iit {'                                                                                    '}Makes us {'                                                                                    '}{'                                                                                    '}{'                                                                                    '}{'                                                                                    '}Harderr{'                                                                                    '}{'                                                                                    '} Betterrr {'                                                                                    '}Fasterrr{'                                                                                    '}Strongerr"
        pitch='10'
        rate='0.7'
      />
      <TextVote>{counter2} votes </TextVote>
      <button className="final-button"onClick={() => setCounter2(counter2 + 1)}>Vote</button>
      </MusicCard>
      <MusicCard>
      <CardFinalPage {...perseverance} />
      <Speech
        song="This is{  }Maajor Toom to Grouunnd Control{'                                                                                                      '},I'm steppiinng through the doorr,{'                                                                                                      '}And I'm floating in a most peculiar way,{'                                                                                                      '}And the stars look very different today"
        pitch='0.5'
        rate='0.7'
      />
       <TextVote>{counter3} votes </TextVote>
      <button className="final-button" onClick={() => setCounter3(counter3 + 1)}>Vote</button>
     </MusicCard>
     <MusicCard>
      <CardFinalPage {...spirit} />
     
      <Speech
        song="And I think it's gonna be a long long time{'                                                                                    '}'Till touch down brings me round again to find   {'                                                                                    '}I'm not the man they think I am at home   {'                                                                                    '}Oh no no no {'                                                                                    '}I'm a rocket maaaaaaaaaaaaaaaaaaaannnn    {'                                                                                    '}Rocket maaaaaaaan burning out his fuse up here alone"
        pitch='15'
        rate='0.7'
      />
       <TextVote>{counter4} votes </TextVote>
      <button className="final-button" onClick={() => setCounter4(counter4 + 1)}>Vote</button>
      </MusicCard>
    </ContainerPage>
  );
};

export default FinalPage;
