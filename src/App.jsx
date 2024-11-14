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

function Header() {
  return (
    <header
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      <div className="logo ibm-plex-sans-regular">
        <a>Маминова Анна</a>
      </div>
      {/* <h1 className="content-title ibm-plex-sans-bold">Дизайнер книг</h1> */}
      <h1 className="content-title ibm-plex-sans-bold">
        Групповой автопортрет неизвестного <br /> с хвостом и на шпильках
      </h1>
      <nav>
        <ul>
          <li>
            <a className="ibm-plex-sans-regular">Образование</a>
          </li>
          <li>
            <a className="ibm-plex-sans-regular">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

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

function Cards() {
  return (
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
  );
}

function Body({ children }) {
  return <div className="body-wrapper">{children}</div>;
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="ibm-plex-sans-regular">{currentYear}, Маминова Анна ©</p>
    </footer>
  );
}
function Education() {
  return (
    <div className="education flex-column-container">
      <div className="line_1" />

      <p className="education-text education-text_18 ibm-plex-sans-regular ">
        <a href="https://design.hse.ru" target="_blank">
          <b className="education-text_30 ibm-plex-sans-semibold ">
            Школа дизайна НИУ ВШЭ
          </b>
          <br />
          Национальный исследовательский университет «Высшая школа экономики»
          <br />
        </a>
        <br />
        <b className="education-text education-text_30 ibm-plex-sans-semibold">
          Коммуникационный дизайн
        </b>
        <br />
        2020-2024
      </p>

      <div className="line_2" />

      <p className="education-text education-text_18 ibm-plex-sans-regular">
        Практика & Стажировка в брендинговом агентстве
        <br />
        <a href="https://www.terminaldesign.ru" target="_blank">
          <b className="ibm-plex-sans-semibold">«Терминал дизайн»</b>
        </a>
      </p>

      <div className="line_3" />

      <p className="education-text education-text_18 ibm-plex-sans-regular">
        Английский язык — <b className="ibm-plex-sans-semibold">С1</b>
        <br />
        Немекий язык — <b className="ibm-plex-sans-semibold">B1</b>
      </p>

      <div className="line_4" />

      <p className="education-text education-text_18 ibm-plex-sans-regular">
        <b className="ibm-plex-sans-semibold education-text_30">
          Художественная школа «Александрино»
        </b>
        <br />
        2009-2018
      </p>

      <div className="line_5" />
    </div>
  );
}

function Contacts() {
  return (
    <div className="contacts flex-column-container">
      <div className="contacts-text">
        <p className="ibm-plex-sans-regular">
          {"Почта: "}
          <a
            href="mailto:annatypography@mail.ru&subject=Сотрудничество"
            target="_blank"
          >
            <b className="ibm-plex-sans-semibold">annatypography@mail.ru</b>
          </a>
          <br />
          {"ВКонтакте: "}
          <a href="https://vk.com/anna_typography" target="_blank">
            <b className="ibm-plex-sans-semibold">@anna_typography</b>
          </a>
          <br />
          {"Телеграм: "}
          <a href="https://t.me/annatypography" target="_blank">
            <b className="ibm-plex-sans-semibold">@annatypography</b>
          </a>
        </p>
      </div>
      <div className="line_6" />
      <div className="contacts-text ibm-plex-sans-semibold">
        <p>
          <a href="tel:+79062706203" target="_blank">
            <b>+7 906-270-62-03</b>
          </a>
        </p>
      </div>
      <div className="line_7" />
      <div className="contacts-text ibm-plex-sans-semibold">
        <p>
          <b>Санкт-Петербург</b>
        </p>
      </div>
      <div className="line_8" />
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Body>
        <Cards />
        <Education />
        <Contacts />
      </Body>
      <Footer />
    </>
  );
}

export default App;
