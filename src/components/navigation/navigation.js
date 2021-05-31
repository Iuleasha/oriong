import { uniqueId } from "../../utils/utils";
import "../../visually-hidden/visually-hidden.scss";
import "./navigation.scss";

const navigation = [
  {
    text: "Главная",
    id: "#main",
  },
  {
    text: "Наши преимущества",
    id: "#about",
  },
  {
    text: "Ассортимент",
    id: "#assort",
  },
  {
    text: "Как мы работаем",
    id: "#our-process",
  },
  {
    text: "Область применения",
    id: "#application",
  },
  {
    text: "Контакты",
    id: "#contacts",
  },
];

function Navigation() {
  return (
    <nav className="nav nav--opened">
      <input
        id="nav-toggle"
        className="visually-hidden nav-toggle"
        type="checkbox"
      />
      <label htmlFor="nav-toggle" className="nav__menu-wrapper">
        <span className="nav__menu" />
        Меню
      </label>
      <ul className="nav__list">
        {navigation.map((item) => (
          <li key={uniqueId()} className="nav__item">
            <a
              className="nav__list-link"
              aria-label={item.text}
              href={item.id}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
