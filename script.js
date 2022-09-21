const featureBtn = document.querySelector(".intro-feature");
const dropdownF = document.querySelector(".dropdown-feature");
const companyBtn = document.querySelector(".intro-company");
const dropdownC = document.querySelector(".dropdown-company");
const arrowF = document.querySelector(".feature");
const arrowC = document.querySelector(".company");
const closeBtn = document.querySelector(".intro-close");
const overlay = document.querySelector(".intro-overlay");
const menuBtn = document.querySelector(".intro-menu");
const overlayBg = document.querySelector('.overlay');

closeBtn.addEventListener("click", () => {
  if (!overlay.classList.contains("acitve")) {
    overlay.classList.add("active");
  } else {
    overlay.classList.remove("active");
  }
});

featureBtn.addEventListener("click", () => {
  if (!arrowF.classList.contains("rotate")) {
    openFeature();
  } else {
    closeFeature();
  }
});

companyBtn.addEventListener("click", () => {
  if (!arrowC.classList.contains("rotate")) {
    openCom();
  } else {
    closeCom();
  }
});

menuBtn.addEventListener("click", () => {
  if (!overlay.classList.contains("active")) {
    overlay.classList.add("active");
    overlay.classList.remove("unactive");
    overlayBg.classList.add('active');
  }
});

closeBtn.addEventListener("click", () => {
  if (overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    overlay.classList.add("unactive");
    overlayBg.classList.remove('active');
  }
});

document.querySelector(".overlay").addEventListener("click", () => {
  if (overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    overlay.classList.add("unactive");
    overlayBg.classList.remove('active');
  }
});

function openFeature() {
  dropdownF.style.opacity = "1";
  arrowF.classList.add("rotate");
}

function closeFeature() {
  dropdownF.style.opacity = "0";
  arrowF.classList.toggle("rotate");
}

function openCom() {
  dropdownC.style.opacity = "1";
  arrowC.classList.add("rotate");
}

function closeCom() {
  dropdownC.style.opacity = "0";
  arrowC.classList.toggle("rotate");
}
