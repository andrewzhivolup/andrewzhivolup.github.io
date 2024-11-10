import jpg1 from "../../assets/0_start/1.jpg";
import jpg2 from "../../assets/0_start/2.jpg";
import jpg3 from "../../assets/0_start/3.jpg";
import jpg4 from "../../assets/0_start/4.jpg";
import jpg5 from "../../assets/0_start/5.jpg";
import jpg6 from "../../assets/0_start/6.jpg";
import jpg7 from "../../assets/0_start/7.jpg";
import jpg8 from "../../assets/0_start/8.jpg";
import jpg9 from "../../assets/0_start/9.jpg";
import "./StartPage.scss";

const cards = [
  {
    src: jpg1,
    text: (
      <span>
        Каталог выставки <br /> Петра Швецова
      </span>
    ),
    orientation: "horizontal",
  },
  {
    src: jpg2,
    text: (
      <span>
        Документальная книга
        <br />
        про экспедицию
        <br />
        Государственного Эрмитажа
      </span>
    ),
    orientation: "horizontal",
  },
  {
    src: jpg3,
    text: (
      <span>
        Палеонтологический
        <br />
        сборник статей:
        <br />
        про динозавров и не только
      </span>
    ),
    orientation: "horizontal",
  },
  {
    src: jpg4,
    text: (
      <span>
        Исследуя
        <br />
        типографику
      </span>
    ),
    orientation: "vertical",
  },
  {
    src: jpg5,
    text: (
      <span>
        Пьеса
        <br />
        «Дети проходных дворов»
      </span>
    ),
    orientation: "horizontal",
  },
  {
    src: jpg6,
    text: (
      <span>
        Путеводитель
        <br />
        по трём штатам
      </span>
    ),
    orientation: "horizontal",
  },
  {
    src: jpg7,
    text: (
      <span>
        Книга художника
        <br />
        «НОКАУТ»
      </span>
    ),
    orientation: "horizontal",
  },
  {
    src: jpg8,
    text: (
      <span>
        Календарь
        <br />
        перформансов
      </span>
    ),
    orientation: "vertical",
  },
  {
    src: jpg9,
    text: (
      <span>
        Книга художника
        <br />
        «Песни еретиков»
      </span>
    ),
    orientation: "horizontal",
  },
];

function Card({ src, text, orientation, link }) {
  return (
    <>
      <div className="card-wrapper">
        <img className={`card-image ${orientation}`} src={src} />
        <div className="white-card-wrapper">
          <div className="card-text ibm-plex-sans-bold">{text}</div>
        </div>
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <div className="logo ibm-plex-sans-regular">Маминова Анна</div>
      <h1 className="ibm-plex-sans-bold">Дизайнер книг</h1>
      <nav>
        <ul>
          <li>
            <div className="ibm-plex-sans-regular" href="">
              Образование
            </div>
          </li>
          <li>
            <a className="ibm-plex-sans-regular" href="">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <a className="ibm-plex-sans-regular nav-link" href="">
        Маминова Анна
      </a>
      <a className="ibm-plex-sans-regular nav-link" href="">
        Образование
      </a>
      <a className="ibm-plex-sans-regular nav-link" href="">
        Контакты
      </a>
    </footer>
  );
}

function StartPage() {
  return (
    <>
      <Header />
      <div className="cards">
        {cards.map(({ src, text, orientation, link }, i) => (
          <Card
            key={i}
            src={src}
            text={text}
            link={link}
            orientation={orientation}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default StartPage;
