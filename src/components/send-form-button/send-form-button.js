import "./send-form-button.scss";

function SendForm({ clickHandler }) {
  const onClick = () => {
    if (clickHandler) {
      clickHandler();
    }
  };
  return (
    <div className="send-form">
      <button className="send-form__button" onClick={onClick}>
        Отправить мне прайс лист
      </button>
    </div>
  );
}

export default SendForm;
