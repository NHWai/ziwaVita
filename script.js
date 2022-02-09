"use strict";

const iconMenu = document.querySelector(".burger--icon");
const menu = document.querySelector(".nav--menu");
const iconDown = document.querySelector(".drop");
const dropdown = document.querySelector(".menuList--drop");

iconDown.addEventListener("click", function () {
  dropdown.classList.toggle("block");
});

iconMenu.addEventListener("click", function () {
  menu.classList.toggle("show");
  iconMenu.classList.toggle("active");
});

/* Prevent transition while resizing the page */

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

/* Articles Slider*/

const articles = document.querySelectorAll(".articles--content");
const articlesContainer = document.querySelector(".articles--container");
const carousel = document.querySelector(".carousel");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let direction;

const prevF = () => {
  if (direction === -1) {
    articlesContainer.appendChild(articlesContainer.firstElementChild);
    direction = 1;
  }
  direction = 1;
  carousel.style.justifyContent = "flex-end";
  articlesContainer.style.transform = "translateX(33.33%)";
};

const nextF = () => {
  if (direction === 1) {
    articlesContainer.prepend(articlesContainer.lastElementChild);
    direction = -1;
  }
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  articlesContainer.style.transform = "translateX(-33.33%)";
};

articlesContainer.addEventListener("transitionend", () => {
  if (direction === -1) {
    articlesContainer.appendChild(articlesContainer.firstElementChild);
  } else if (direction === 1) {
    articlesContainer.prepend(articlesContainer.lastElementChild);
  }

  articlesContainer.style.transition = "none";
  articlesContainer.style.transform = "translateX(0)";
  setTimeout(() => {
    articlesContainer.style.transition = " transform 0.5s ease";
  });
});

const timeout = setInterval(nextF, 4000);

prev.addEventListener("click", () => {
  prevF();
  clearInterval(timeout);
});
next.addEventListener("click", () => {
  nextF();
  clearInterval(timeout);
});

/* Cards Animation */

const bluecards = document.querySelectorAll(".bluecard");
const redcards = document.querySelectorAll(".redcard");
const valueSection = document.querySelector(".values .secondaryHeader");
const missionSection = document.querySelector(".missions .secondaryHeader");

const add = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting)
    bluecards.forEach((card) => card.classList.add("start"));
};

const valueSectionObserver = new IntersectionObserver(add, {
  root: null,
  threshold: 1,
  // rootMargin: "-200px",
});

valueSectionObserver.observe(valueSection);

const msadd = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting)
    redcards.forEach((card) => card.classList.add("start"));
};

const missionSectionObserver = new IntersectionObserver(msadd, {
  root: null,
  threshold: 1,
  // rootMargin: "-200px",
});

missionSectionObserver.observe(missionSection);

/*------------------------Latest Articles----------------------------*/

const container = [
  {
    img: "img/latestarticlesImg1",
    header: "အထွေထွေကျန်းမာရေးဆောင်းပါးများ",
    date: "15 November 2021",
    description: "သွေးတိုး နဲ့ ဆီးချို ဘယ်လိုတွေဆက်စပ်နေလဲ?",
  },
  {
    img: "img/latestarticlesImg2",
    header: "အထွေထွေကျန်းမာရေးဆောင်းပါးများ",
    date: "01 November 2021",
    description: "ဘိုးဘိုးဘွားဘွားတို့ မတော်တဆထိခိုက်ချော်လဲခြင်းမရှိစေဖို့",
  },
  {
    img: "img/latestarticlesImg3",
    header: "မျိုးဆက်ပွားကျန်းမာရေးဆိုင်ရာ ဆောင်းပါးများ",
    date: "05 December 2021",
    description: "DMPA-SC ကိုဘာကြောင့်အသုံးပြုသင့်သလဲ",
  },
];

const coreContainer = document.querySelector(".core-container");

const artFunc = function () {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("latestarticles--cardcontainer");

  container.forEach((el) => {
    const html = `
      <div class="latestarticles--card ">
      <img src="${el.img}.png" />
      <p class="descriptionSM">${el.header}</p>
      <p class="date">${el.date}</p>
      <p class="description">${el.description}</p>
      <button class="btnSm">Read More</button>
      </div>
  `;
    cardContainer.insertAdjacentHTML("beforeend", html);
  });

  coreContainer.insertAdjacentElement("beforeend", cardContainer);
  console.log(document.querySelectorAll(".latestarticles--card"));
};

artFunc();
