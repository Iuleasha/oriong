import Logo from "../logo/logo";
import "./header.scss";
import Navigation from "../navigation/navigation";
import Promo from "../promo-wrapper/promo-wrapper";

function Header() {
  return (
    <header className="page__header">
      <div className="page__header-wrapper">
        <Logo />
        <h1 className="page__header-title">
          Разработчик и поставщик рабочих перчаток в Российскую Федерацию. Orion
          Safety
        </h1>
      </div>
      <Navigation />
      <Promo />
    </header>
  );
}

export default Header;
