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
      </label>

      <label className="form__wrapper-label">
        <span className="visually-hidden">Телефон</span>
        <input
          className="label-form__item"
          name="tel"
          pattern="^[0-9-+\s()]*$"
          placeholder="Мобильный телефон"
          required
          type="tel"
        />
      </label>
      <SendForm />
    </form>
  );
}

export default Form;
