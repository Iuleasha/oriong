import { useEffect, useState } from "react";
import SendForm from "../send-form-button/send-form-button";
import "./form.scss";

const SITE_KEY = "6Ld-EwIbAAAAAGXhZ5joUhqshNZ_BjlCh3rEp_bm";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submitFormHandler = (e) => {
    e.preventDefault();

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
    console.log(token);
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
        console.log(res);
        setLoading(false);
        setResponse(res);
        console.log(response);
      });
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
      function () {
        console.log("Script loaded!");
      }
    );
  }, []);

  return (
    <form className="form">
      <span className="visually-hidden">Имя</span>
      <label className="form__wrapper-label">
        <input
          className="label-form__item"
          name="firstname"
          placeholder="Имя"
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label className="form__wrapper-label">
        <span className="visually-hidden">Телефон</span>
        <input
          className="label-form__item"
          name="tel"
          pattern="^[0-9-+\s()]*$"
          placeholder="Мобильный телефон"
          type="tel"
          onChange={(e) => setTel(e.target.value)}
          value={tel}
        />
      </label>
      <SendForm clickHandler={submitFormHandler} disabled={loading} />
    </form>
  );
}

export default Form;
