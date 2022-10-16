import style from "./main.module.scss";
import TopPart from "./TopPart/TopPart";
import BottomPart from "./BottomPart/BottomPart";

const Main = () => {
  return (
    <main>
      <TopPart />
      <BottomPart />
    </main>
  );
}

export default Main;