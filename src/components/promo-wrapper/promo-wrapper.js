import PriceListForm from "../price-form/price-form";
import "./promo-wrapper.scss";

function Promo() {
  return (
    <div className="promo__wrapper">
      <div className="promo__wrapper-percent">
        <p className="promo__wrapper-title">
          Как снизить затраты при закупках сиз рук?
        </p>
        <p className="promo__wrapper-text">С нами это возможно!</p>
      </div>
      <PriceListForm />
    </div>
  );
}

export default Promo;
