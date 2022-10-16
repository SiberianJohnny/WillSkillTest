import style from "./toppart.module.scss";

const TopPart = () => {
  return (
    <section className={style.top}>
      <div className={style.top_content}>
        <h1 className={style.main_heading}>Активируй иммунитет!</h1>
        <p className={style.main_description}>
          Всего пять секунд в день помогут укрепить иммунитет и повысить
          защитные силы организма
        </p>
        <h3 className={style.secondary_heading}>NOOTRIS ПОМОГАЕТ</h3>
        <p className={style.secondary_description}>
          Вашему организму во время пандемии и сезонных простуд
        </p>
      </div>
    </section>
  );
};

export default TopPart;
