import logo from "../../images/logo.svg";
import cart from "../../images/cart.svg";
import style from "./header.module.scss";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <img src={logo} alt="nootris logo" />
        <Navigation />
        <img src={cart} alt="nootris logo" />
      </div>
    </header>
  );
};

export default Header;
