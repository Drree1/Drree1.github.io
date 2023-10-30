const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
  };

  fetch('https://server.com/index.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
  


window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
}