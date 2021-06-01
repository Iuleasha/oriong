import { useEffect, useState } from "react";
import SendForm from "../send-form-button/send-form-button";
import "./form.scss";
import Notification from "../notification/notification";
import { validateEmail } from "../../utils/utils";

const SITE_KEY = "6Ld-EwIbAAAAAGXhZ5joUhqshNZ_BjlCh3rEp_bm";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDone, setDone] = useState(false);
  const [isEmailValid, setValidation] = useState(true);

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0) {
      return;
    }

    if (!validateEmail(email)) {
      setValidation(false);

      return;
    }

    setLoading(true);

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((token) => {
          console.log(token);
          submitData(token);
        });
    });
  };

  const submitData = (token) => {
    fetch("/api.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        email,
        tel,
        token,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (res.success) {
          setEmail("");
          setName("");
          setTel("");
          setDone(true);
          setTimeout(() => {
            setDone(false);
            setLoading(false);
          }, 3000);
        }
      });
  };

  const changeEmail = (value) => {
    setEmail(value);

    if (validateEmail(value) && !isEmailValid) {
      setValidation(true);
    }
  };

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) {
            callback();
          }
        };

        document.body.appendChild(script);
      }

      if (isScriptExist && callback) {
        callback();
      }
    };

    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {}
    );
  }, []);

  return (
    <form className="form">
      <span className="visually-hidden">Имя</span>
      <label className="form__wrapper-label">
        <input
          className="label-form__item"
          name="firstname"
          placeholder="Имя *"
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <span className="label-form__name" />
      </label>

      <label className="form__wrapper-label ">
        <span className="visually-hidden">E-mail</span>
        <input
          className="label-form__item"
          name="email"
          placeholder="Ваш Email *"
          required
          type="email"
          onChange={(e) => changeEmail(e.target.value)}
          value={email}
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
          type="tel"
          onChange={(e) => setTel(e.target.value)}
          value={tel}
        />
        <span className="label-form__phone" />
      </label>
      <p className="label-form__notice">* - Обязательные поля</p>
      <SendForm
        clickHandler={submitFormHandler}
        disabled={loading || name.length === 0 || email.length === 0}
      />
      {isDone && <Notification />}
      {!isEmailValid && (
        <Notification status="error" text="Введите корректный Email" />
      )}
    </form>
  );
}

export default Form;
