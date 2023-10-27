const getMovies = async () => {
    const url = " https://portiaportia.github.io/json/movies.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showMovies = async () => {
    let movies = await getMovies();
    let moviesSection = document.getElementById("movies-section");
  
    movies.forEach((movie) => {
      moviesSection.append(getMovieItem(movie));
    });
  };
  
  const getMovieItem = (movie) => {
    let section = document.createElement("section");
  
    let h3 = document.createElement("h3");
    h3.innerText = movie.title;
    section.append(h3);
  

    let ul = document.createElement("ul");
    const image = document.createElement("img");

    image.src = ` https://portiaportia.github.io/json/`+movie.img;
    section.append(image);
    section.append(ul);
    ul.append(image)
    ul.append(h3)
    ul.append(getLi(`Director: ${movie.director}`));
    ul.append(getLi(`Actors: ${movie.actors}`));
    ul.append(getLi(`Year Released: ${movie.year}`));
    ul.append(getLi(`Genre: ${movie.genres}`));
    ul.append(getLi(`Description: ${movie.description}`));
  
  
    return section;
  };
  
  const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
  };
  
  
  window.onload = () => showMovies();