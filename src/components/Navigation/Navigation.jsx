import style from "./navigation.module.scss";

const Navigation = () => {
  const navItems = [
    {
      name: "FAQ",
      link: "#",
    },
    {
      name: "Оплата и доставка",
      link: "#",
    },
    {
      name: "Возврат",
      link: "#",
    },
    {
      name: "Исследования",
      link: "#",
    },
    {
      name: "Личный кабинет",
      link: "#",
    },
    {
      name: "8 (800) 600-09-90",
      link: "#",
    },
  ];

  return (
    <nav>
      <input
        className={style.navigation__hamb}
        type="checkbox"
        id="side-menu"
      />
      <label className={style.navigation__hamb_label} for="side-menu">
        <span className={style.navigation__hamb_line}></span>
      </label>
      <ul className={style.navigation}>
        {navItems.map((item) => (
          <li key={item.name} className={style.navigation__item}>
            <a href={item.link} className={style.navigation__item_link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
