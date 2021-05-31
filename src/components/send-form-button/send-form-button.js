import "./send-form-button.scss";

function SendForm({ clickHandler, disabled = false }) {
  const onClick = (e) => {
    if (clickHandler) {
      clickHandler(e);
    }
  };
  return (
    <div className="send-form">
      <button
        className="send-form__button"
        data-action="submit"
        onClick={(e) => onClick(e)}
        disabled={disabled}
      >
        Отправить мне прайс лист
      </button>
    </div>
  );
}

export default SendForm;
