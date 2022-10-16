import logo from "../../images/logo.svg";
import cart from "../../images/cart.svg";
import style from "./header.module.scss";
import Navigation from "../Navigation/Navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [cartValue, setCartValue] = useState(0)

  useEffect(() => {
    return () => {
      setCartValue(1)
    }
  }, [])


  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <img src={logo} alt="nootris logo" className={style.header__logo} />
        <Navigation className={style.header__navigation} />
        <div className={style.header__cart}>
          <img src={cart} alt="nootris logo" className={style.header__cart_icon} />
          <span className={style.header__cart_value}>{cartValue}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
