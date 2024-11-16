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

import "./App.scss";
import SliderSlick from "./SliderSlick";
import { useEffect, useState } from "react";

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
      <h1 className="content-title ibm-plex-sans-bold"> Дизайнер книг</h1>
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

function Card({ src, text, orientation, scrollTo }) {
  return (
    <>
      <div
        className="card-wrapper"
        onClick={() => {
          window.scrollTo({
            top: scrollTo,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
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
    scrollTo: 1215,
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
    scrollTo: 4236,
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
    <div className="cards main-container">
      {cards.map(({ src, text, orientation, link, scrollTo }, i) => (
        <Card
          key={i}
          src={src}
          text={text}
          link={link}
          orientation={orientation}
          scrollTo={scrollTo}
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

const catalogImages = [card_7, card_7, card_7];

function Catalog() {
  return (
    <div className="catalog">
      <SliderSlick images={catalogImages} centerPadding={425} />
      <div className="main-container">
        <div className="main-container-text">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              Каталог посвящен выставке Петра Швецова «Групповой автопортрет
              неизвестного с хвостом и на шпильках».
              <br />
              Выставка проходила в 2022 году в галерее современного искусства
              Марины Гисич в Санкт-Петербурге.
              <br />
              <br />
              Отличительной чертой каталога является калька, на которой
              располагаются названия работ.
              <br />
              Зритель сначала видит имя героини и, перевернув страницу, узнает
              как она выглядит на картине.
            </p>
          </div>

          <div className="main-container-setting">
            <p>
              Формат: 180 × 210 мм
              <br />
              Бумага: мел. глянц. 130 г/м², калька Spectral 80 г/м²
              <br />
              178 страниц
              <br />
              Фотограф: Маминова Диана
            </p>
          </div>
        </div>

        <img className="image_4" src={card_7} />
        <img className="image_5" src={card_7} />
        <img className="image_6" src={card_7} />
        <img className="image_7" src={card_7} />
        <img className="image_8" src={card_7} />
        <img className="image_9" src={card_7} />
      </div>
    </div>
  );
}

const dinosaursImages = [card_5, card_5, card_5];

function Dinosaurs() {
  return (
    <div className="dinosaurs">
      <SliderSlick images={dinosaursImages} centerPadding={425} />
      <div className="main-container">
        <div className="main-container-text ">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              Современная интерпретация научно-популярной книги
              <br />
              про палеонтологию и динозавров. Адаптированные схемы,
              <br />
              таблицы и иллюстрации — все это поможет даже
              <br />
              не подготовленному читателю погрузиться в науку.
            </p>
          </div>

          <div className="main-container-setting dino-setings">
            <p>
              Формат: 210 × 297 мм
              <br />
              Бумага: мел. матовая 130 г/м²
              <br />
              146 страниц
              <br />
              Фотограф: Маминова Диана
            </p>
          </div>
          <img className="image_6-dino" src={card_5} />
        </div>

        <div className="container-45_7_dino">
          <div className="container-4_5_dino">
            <img className="image_4_5_8_9-dino" src={card_5} />
            <img className="image_4_5_8_9-dino" src={card_5} />
          </div>
          <img className="image_7-dino" src={card_5} />
        </div>
        <img className="image_4_5_8_9-dino" src={card_5} />
        <img className="image_4_5_8_9-dino" src={card_5} />
        <img className="image_10-dino" src={card_5} />
        <img className="image_11_13-dino" src={card_5} />
        <img className="image_12-dino" src={card_5} />
        <img className="image_11_13-dino" src={card_5} />
      </div>
    </div>
  );
}

const knockoutImages = [card_5, card_5, card_5];

function Knockout() {
  return (
    <div className="knockout">
      <SliderSlick images={performanceImages} centerPadding={425} />
      <div className="main-container">
        <div className="main-container-text">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              «НОКАУТ» — книга художника, которая раскрывает тему
              <br />
              юмора и его психологии. На перчатках написаны шутки
              <br />
              и анекдоты, что является метафорой использования юмора
              <br />
              в повседневной жизни: для защиты, для нападения,
              <br />
              для уклонения.
            </p>
          </div>
          <div className="main-container-setting dino-setings">
            <p>Фотограф: Маминова Диана</p>
          </div>
        </div>
        <img className="image_4-knockout" src={card_5} />
        <img className="image_5_7-knockout" src={card_5} />
        <img className="image_6-knockout" src={card_5} />
        <img className="image_5_7-knockout" src={card_5} />
        <img className="image_8-knockout" src={card_5} />
      </div>
    </div>
  );
}

const performanceImages = [card_5, card_5, card_5];

function Performance() {
  return (
    <div className="performance">
      <SliderSlick images={performanceImages} centerPadding={425} />
      <div className="main-container">
        <div className="main-container-text">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              Календарь посвящен искусству перформанса
              <br />
              и его авторам. Каждый месяц рассказывает про новый
              <br />
              перформанс через типографические приемы.
            </p>
          </div>
        </div>
        <div className="container-4_5_performance">
          <img className="image_4_5-performance" src={card_5} />
          <img className="image_4_5-performance" src={card_5} />
        </div>
        <div className="container-small_performance">
          <img className="image_4_6_8_10_11_12_13-performance" src={card_5} />
          <img className="image_4_6_8_10_11_12_13-performance" src={card_5} />
        </div>
        <img className="image_7_9-performance" src={card_5} />
        <div className="container-small_performance">
          <img className="image_4_6_8_10_11_12_13-performance" src={card_5} />
          <img className="image_4_6_8_10_11_12_13-performance" src={card_5} />
        </div>
        <img className="image_7_9-performance" src={card_5} />
        <div className="container-small_performance">
          <img className="image_4_6_8_10_11_12_13-performance" src={card_5} />
          <img className="image_4_6_8_10_11_12_13-performance" src={card_5} />
        </div>
      </div>
    </div>
  );
}

const hereticsImages = [card_7, card_7, card_7];

function Heretics() {
  return (
    <div className="heretics">
      <SliderSlick images={hereticsImages} centerPadding={425} />

      <div className="main-container">
        <div className="main-container-text">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              Сборник стихотворений «Песни еретиков»посвящен отношениям человека
              и природы, в текстах описываются чувства людей, которые не могут
              найти покоя.
              <br />
              <br />
              Для создания иллюстраций был использован наждак, который помимо
              тактильных ощущений передает звуки стихотворений.
            </p>
          </div>

          <div className="main-container-setting ibm-plex-sans-regular">
            <p>
              Формат: 297 × 420 мм
              <br />
              Бумага: акварельная тонированная, наждачная
              <br />
              9 страниц
              <br />
              Фотограф: Маминова Диана
            </p>
          </div>
        </div>

        <img className="image_4-heretics" src={card_7} />
        <img className="image_5-heretics" src={card_7} />
        <div className="container-6-789">
          <img className="image_6-heretics" src={card_7} />
          <div className="container-789">
            <img className="image_7_8_9_11_12-heretics" src={card_7} />
            <img className="image_7_8_9_11_12-heretics" src={card_7} />
            <img className="image_7_8_9_11_12-heretics" src={card_7} />
          </div>
        </div>
        <img className="image_10_13-heretics" src={card_7} />
        <div className="container-11-12">
          <img className="image_7_8_9_11_12-heretics" src={card_7} />
          <img className="image_7_8_9_11_12-heretics" src={card_7} />
        </div>
        <img className="image_10_13-heretics" src={card_7} />
      </div>
    </div>
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
          <a href="mailto:annatypography@mail.ru&subject=Сотрудничество">
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
          <a href="tel:+79062706203">
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
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  return (
    <>
      {/* <Header /> */}
      <Body>
        <Cards />
        <Catalog />
        <Dinosaurs />
        <Knockout />
        <Performance />
        <Heretics />
        <Education />
        <Contacts />
      </Body>
      <Footer />
    </>
  );
}

export default App;
