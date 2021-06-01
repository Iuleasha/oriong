import "./our-process.scss";
import { uniqueId } from "../../utils/utils";

const ourProjectObject = [
  {
    text: "Вы отправляете заявку или звоните нам",
    alt: "Иконка-1",
  },
  {
    text: "Мы отправляем вам коммерческое предложение",
    alt: "Иконка-2",
  },
  {
    text: "Согласовываем контракт и условия поставки",
    alt: "Иконка-3",
  },
  {
    text: "Доставка рабочих перчаток до вашего склада",
    alt: "Иконка-4",
  },
];

function OurProcess() {
  return (
    <section className="our-process" id="our-process">
      <div className="our-process__wrapper">
        <h2 className="our-process__title">Как мы работаем</h2>
        <ul className="our-process__list">
          {ourProjectObject.map((item, index) => (
            <li className="our-process__item" key={uniqueId()}>
              <div className={`our-process__img our-process__img--${index}`} />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OurProcess;
