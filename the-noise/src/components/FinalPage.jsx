import CardFinalPage from './CardFinalPage';
import data from '../dto.json';

const { opportunity } = data.rovers[0];
const { curiosity } = data.rovers[0];
const { perseverance } = data.rovers[0];
const { spirit } = data.rovers[0];

const FinalPage = () => {
    return (
        <>
            <CardFinalPage {...curiosity} />
            {/* <CardFinalPage {...opportunity} />
            <CardFinalPage {...perseverance} />
            <CardFinalPage {...spirit} /> */}
        </>
    );
}

export default FinalPage;