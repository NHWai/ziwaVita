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

function myFunction(x) {
  if (x.matches) {
    // If media query matches
  } else {
    menu.classList.remove("show");
  }
}

var x = window.matchMedia("(max-width: 968px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
