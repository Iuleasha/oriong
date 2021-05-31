import Card from "../card/card";

function CardsWrapper({ cards }) {
  return (
    <div className="card__wrapper">
      {cards.map((item) => (
        <Card card={item} />
      ))}
    </div>
  );
}

export default CardsWrapper;
