"use strict";

const iconMenu = document.querySelector(".nav--logo--icon");
const menu = document.querySelector(".nav--menu");
const iconDown = document.querySelector(".drop");
const dropdown = document.querySelector(".menuList--drop");

iconDown.addEventListener("click", function () {
  dropdown.classList.toggle("block");
});

iconMenu.addEventListener("click", function () {
  menu.classList.toggle("show");
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
