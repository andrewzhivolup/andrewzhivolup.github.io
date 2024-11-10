import "./App.scss";
import {
  card_1,
  card_2,
  card_3,
  card_4,
  card_5,
  card_6,
  card_7,
  card_8,
  card_9,
} from "./assets/0_cards";

const cards = [
  {
    src: card_1,
    text: (
      <span>
        Каталог выставки <br /> Петра Швецова
      </span>
    ),
    orientation: "horizontal",
  },
  {
    src: card_2,
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
    src: card_3,
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
    src: card_4,
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
    src: card_5,
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
    src: card_6,
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
    src: card_7,
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
    src: card_8,
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
    src: card_9,
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

function Card({ src, text, orientation }) {
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

function App() {
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

export default App;
