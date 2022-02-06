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

const articles = document.querySelectorAll(".articles--link");
const articlesContainer = document.querySelector(".articles--container");
const leftArrow = document.querySelector(".articles .fa-chevron-left");
const rightArrow = document.querySelector(".articles .fa-chevron-right");

let currSlide = 0;
articles.forEach((a, i) => (a.style.transform = `translateX(${100 * i}%)`));

const nextSlide = () => {
  currSlide++;
  if (currSlide >= articles.length) currSlide = 0;
  articles.forEach(
    (a, i) => (a.style.transform = `translateX(${100 * (i - currSlide)}%)`)
  );
};

const prevSlide = () => {
  currSlide--;
  if (currSlide < 0) currSlide = articles.length - 1;
  articles.forEach(
    (a, i) => (a.style.transform = `translateX(${100 * (i - currSlide)}%)`)
  );
};

const timeout = setInterval(() => {
  currSlide++;
  if (currSlide >= articles.length) currSlide = 0;
  articles.forEach(
    (a, i) => (a.style.transform = `translateX(${100 * (i - currSlide)}%)`)
  );
}, 7000);

window.addEventListener("load", () => {
  console.log("hayy");
});

// clearInterval(timeout);

rightArrow.addEventListener("click", function () {
  nextSlide();
  clearInterval(timeout);
});
leftArrow.addEventListener("click", function () {
  prevSlide();
  clearInterval(timeout);
});
