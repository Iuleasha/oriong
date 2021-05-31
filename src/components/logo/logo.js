import "./logo.scss";
import logo from "./img/logo.png";

function Logo() {
  return (
    <div className="logo">
      <a className="logo__link" href="/">
        <img
          src={logo}
          className="logo__style"
          width="150"
          height="150"
          alt="Логотип"
        />
      </a>
    </div>
  );
}

export default Logo;
