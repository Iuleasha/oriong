import PriceListForm from "../price-form/price-form";
import "./promo-wrapper.scss";

function Promo() {
  return (
    <div className="promo__wrapper">
      <div className="promo__wrapper-percent">
        <p className="promo__wrapper-title">
          Снизить стоимость на
          <br />
        </p>
        <strong className="promo__wrapper-sale">
          15 - 20<span className="promo__wrapper-em">%</span>
        </strong>
        <p className="promo__wrapper-text">С нами это возможно!</p>
      </div>
      <PriceListForm />
    </div>
  );
}

export default Promo;
