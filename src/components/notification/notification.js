import "./notification.scss";
function Notification({
  status = "done",
  text = "Ваш заказ успешно отправлен",
}) {
  return (
    <div className={`form__notification ${status}`}>
      <p className="form__notification-text">{text}</p>
    </div>
  );
}

export default Notification;
