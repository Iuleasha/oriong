import SendForm from "../send-form-button/send-form-button";
import "./form.scss";

function Form() {
  return (
    <form action="" className="form" method="post">
      <span className="visually-hidden">Имя</span>
      <label className="form__wrapper-label">
        <input
          className="label-form__item"
          name="firstname"
          placeholder="Имя"
          required
          type="text"
        />
        <span className="label-form__name" />
      </label>

      <label className="form__wrapper-label ">
        <span className="visually-hidden">E-mail</span>
        <input
          className="label-form__item"
          name="email"
          placeholder="Ваш Email"
          required
          type="email"
        />
        <span className="label-form__email" />
      </label>

      <label className="form__wrapper-label">
        <span className="visually-hidden">Телефон</span>
        <input
          className="label-form__item"
          name="tel"
          pattern="^[0-9-+\s()]*$"
          placeholder="+7 ХХХ ХХХ ХХ ХХ"
          // placeholder="Мобильный телефон"
          required
          type="tel"
        />
        <span className="label-form__phone" />
      </label>
      <SendForm />
    </form>
  );
}

export default Form;
