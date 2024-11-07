import jpg1 from "../../assets/0_start/1.jpg";
import jpg2 from "../../assets/0_start/2.jpg";
import jpg3 from "../../assets/0_start/3.jpg";
import jpg4 from "../../assets/0_start/4.jpg";
import jpg5 from "../../assets/0_start/5.jpg";
import jpg6 from "../../assets/0_start/6.jpg";
import jpg7 from "../../assets/0_start/7.jpg";
import jpg8 from "../../assets/0_start/8.jpg";
import jpg9 from "../../assets/0_start/9.jpg";
import { Link } from "react-router-dom";
import "./StartPage.scss";

const elements = [
  {
    src: jpg1,
    text: (
      <span>
        Каталог выставки <br /> Петра Швецова
      </span>
    ),
    orientation: "horizontal",
    link: "/catalog",
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
    link: "/hermitage",
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
    link: "/dinosaurs",
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
    link: "/study",
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
    link: "/play",
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
    link: "/guide",
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
    link: "/knockout",
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
    link: "/calendar",
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
    link: "/heretics",
  },
];

function Page({ src, text, orientation, link }) {
  return (
    <>
      <Link to={link} className="link">
        <div className="card-wrapper">
          <img className={`card-image ${orientation}`} src={src} />
          <div className="white-card-wrapper">
            <div className="card-text ibm-plex-sans-bold">{text}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

function StartPage() {
  return (
    <>
      <div>
        {/* <header>
          <div className="logo ibm-plex-sans-regular">Маминова Анна</div>
          <h1 className="ibm-plex-sans-bold">Дизайнер книг</h1>
          <nav>
            <ul>
              <li>
                <a className="ibm-plex-sans-regular nav-link" href="#">
                  Образование
                </a>
              </li>
              <li>
                <a className="ibm-plex-sans-regular nav-link" href="#">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </header> */}
        <div className="cards">
          {elements.map(({ src, text, orientation, link }, i) => (
            <Page
              key={i}
              src={src}
              text={text}
              link={link}
              orientation={orientation}
            />
          ))}
          {/* <div className="product">
            <a href="#">
              <img
                className="horizontal"
                src={jpg1}
                alt="Каталог выставки Петра Швецова"
              />
              <div class="fcap">
                <div className="card-text ibm-plex-sans-bold">
                  Каталог выставки <br />
                  Петра Швецова
                </div>
              </div>
            </a>
          </div>*/}
        </div>
        {/* <footer>
          <a className="ibm-plex-sans-regular nav-link" href="#">
            Маминова Анна
          </a>
          <a className="ibm-plex-sans-regular nav-link" href="#">
            Образование
          </a>
          <a className="ibm-plex-sans-regular nav-link" href="#">
            Контакты
          </a>
        </footer> */}
      </div>
    </>
  );
}

export default StartPage;
