import "../../visually-hidden/visually-hidden.scss";
import "./price-form.scss";
import Form from "../form/form";

function PriceListForm() {
  return (
    <section className="form__wrapper-description">
      <h2 className="visually-hidden">Форма заказа</h2>
      <h2 className="form__wrapper-tittle">Рабочие перчатки оптом</h2>
      <p className="form__wrapper-text">
        Узнайте сколько вы сможете сэкономить на закупках!
      </p>
      <Form />
    </section>
  );
}

export default PriceListForm;
