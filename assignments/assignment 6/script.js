const showBox = () => {
    document.getElementById("square").classList.add("move-square");
}

const showJasper = () => {
    document.getElementById("jasper") .classList.remove("hide");
}

const hideJasper = () => {
    document.getElementById("jasper") .classList.add("hide");
}


window.onload = () => {
    document.getElementById("button-click").onclick = showBox;
    document.getElementById("button-show") .onclick = showJasper;
    document.getElementById("button-hide") .onclick = hideJasper;
}

