import {uniqueId} from '../../utils/utils';
import Card from '../card/card';

function CardsWrapper({cards}) {
  return (
      <div className="card__wrapper">
        {cards.map((item) => (
            <Card card={item} key={uniqueId()}/>
        ))}
      </div>
  );
}

export default CardsWrapper;
