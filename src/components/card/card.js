import "./card.scss";

function Card({ card }) {
  return (
    <div className="card__item">
      <div className="card__img-wrapper">
        <img
          className="card__img"
          src={card.img}
          alt="Перчатки с нитриловым покрытием артикул 1530"
          width="300"
        />
      </div>
      <div className="card__description">
        <h3 className="card__description-title">{card.title}</h3>
        <p className="card__description-article">
          <b>Артикул:</b>
          {card.article}
        </p>
        <p className="card__description-text">{card.text}</p>
        <p className="card__description-size">
          <b>Размерный ряд:</b>
          {card.size}
        </p>
        {card.lining && (
          <p className="card__description-lining">
            <b>Подкладка:</b>
            {card.lining}
          </p>
        )}
        {card.material && (
          <p className="card__description-material">
            <b>Материал покрытия:</b>
            {card.material}
          </p>
        )}
        {card.lgth && (
          <p className="card__description-length">
            <b>Длина:</b>
            {card.lgth}
          </p>
        )}
        <p className="card__description-safety">
          <b>Защитные свойства:</b>
          {card.safety}
        </p>
        {card.weight && (
          <p className="card__description-weight">
            <b>Вес 1 пары:</b>
            {card.weight}
          </p>
        )}
        <p className="card__description-certificate">
          <b>ТР ТС:</b>
          {card.certificate}
        </p>
        <p className="card__description-standard">
          <b>ГОСТ Р ЕН:</b>
          {card.standard}
        </p>
        <div className="card__description-standards-wrapper">
          {card.standardsImg.map((item) => (
            <div className="card__description-standards-img">
              <img
                className="card__description-img"
                src={item}
                width="62"
                alt="Изображение стандарта"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
