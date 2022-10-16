import style from "./bottompart.module.scss";
import ginger from "../../../images/ginger.png";
import nootris from "../../../images/nootris.png";
import virus from "../../../images/virus.png";

const BottomPart = () => {
  return (
    <section className={style.bottom}>
      <div className={style.bottom_content}>
        <h2 className={style.bottom_heading}>
          ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА <br />
          <span className={style.discount}>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
        </h2>
        <h3 className={style.price}>
          <span className={style.price_old}>750₽</span>690₽
        </h3>
        <div className={style.features}>
          <div className={style.features_item}>
            <img src={ginger} alt="ginger photo" />
            <p className={style.features_item_description}>
              Содержит <br /> <span>имбирь</span>
            </p>
          </div>
          <div className={style.features_special_item}>
            <img src={nootris} alt="nootris photo" />
            <p className={style.features_item_description}>
              + Бесплатная доставка <br /> <span>Специальная цена</span>
            </p>
          </div>
          <div className={style.features_item}>
            <img src={virus} alt="virus photo" />
            <p className={style.features_item_description}>
              Нейтрализует <br /> <span>вирусы</span>
            </p>
          </div>
        </div>
        <button className={style.button}>Оформить заказ!</button>
      </div>
    </section>
  );
};

export default BottomPart;
