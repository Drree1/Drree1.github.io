const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
  };

  const showHome = () => {
    document.getElementById("index.html").classList.add("");
}

const showInfo = () => {
    document.getElementById("index.html").classList.add("hide");
    document.getElementById("info.html").classList.remove("hide");
}

const showHospital = () => {
  document.getElementById("square").classList.add("move-square");
}

const showWait = () => {
  document.getElementById("jasper") .classList.remove("hide");
}

const showThanks = () => {
  document.getElementById("jasper") .classList.remove("hide");
}

const hideJasper = () => {
    document.getElementById("jasper") .classList.add("hide");
}

  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("button-next").onclick = showInfo;
}