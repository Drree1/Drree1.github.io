const getIndex = async () => {
    const url = " https://raw.githubusercontent.com/Drree1/Drree1.github.io/main/json/index.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showIndex = async () => {
    let index = await getIndex();
    let indexSection = document.getElementById("index-section");
  
    index.forEach((index) => {
      indexSection.append(getIndexItem(index));
    });
  };
  
  const getIndexItem = (index) => {
    let section = document.createElement("section");
  
    let h3 = document.createElement("h3");
    h3.innerText = index.title;
    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getLi(index.title));
    ul.append(getLi(index.description));
    ul.append(getLi(index.description2));
    ul.append(getLi(index.description3))
  
  
    return section;

    let section2 = document.getElementById("index-section2");
    
  };
  
  const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
  };
  
  
  window.onload = () => showIndex();