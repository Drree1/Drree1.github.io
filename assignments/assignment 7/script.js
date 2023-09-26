const showexercise1 = () => {
    document.getElementById("exercise1").classList.remove("hide");
    document.getElementById("exercise2").classList.add("hide");
}

const showexercise2 = () => {
    document.getElementById("exercise2").classList.remove("hide");
    document.getElementById("exercise1").classList.add("hide");
}


const exerciseOne = () => {
    const firstName1 = document.getElementById("txt-first-name").value;
    const firstName2 = document.getElementById("txt-second-name").value;
    const firstName3 = document.getElementById("txt-third-name").value;
    const age1 = parseInt(document.getElementById("txt-age1").value);
    const age2 = parseInt(document.getElementById("txt-age2").value);
    const age3 = parseInt(document.getElementById("txt-age3").value);
    const resultDiv = document.getElementById("result");
    resultDiv.classList.add("hidden");

    if (age1, age2 < age3){
        resultDiv.innerHTML = `${firstName3} is the oldest out the group.`;
        resultDiv.classList.remove("hidden");
    }
    else if (age1, age3 < age2) {
        resultDiv.innerHTML = `${firstName2} is the oldest out the group.`;
        resultDiv.classList.remove("hidden");
    }

    else if (age2, age3 < age1) {
        resultDiv.innerHTML = `${firstName1} is the oldest out the group.`;
        resultDiv.classList.remove("hidden");
    }
}

const excerciseTwo = () => {
    const colorSquare = document.getElementById("square").classList.add("red");
    const fillSquare25 = document.getElementById("square").classList.add("fill");
    const fillSquare50 = document.getElementById("square").classList.add("half");
    const fundsRaised = parseInt(document.getElementById("txt-fund").value);
    const resultsDiv = document.getElementById("results");

    if (fundsRaised < 5000){
        
        const colorSquare = document.getElementById("square").classList.remove("red");
        const fillSquare25 = document.getElementById("square").classList.add("fill");
        const fillSquare50 = document.getElementById("square").classList.remove("half");
    }
    else if(fundsRaised == 5000){
        const fillSquare50 = document.getElementById("square").classList.add("half");
    }
    else if(fundsRaised >= 10000){
        const colorSquare = document.getElementById("square").classList.add("red");
        const fillSquare25 = document.getElementById("square").classList.remove("fill");
        const fillSquare50 = document.getElementById("square").classList.remove("half");
    }
    
}

window.onload = () => {
    //get button, tie function to clickage
   // document.getElementById("show-exercise1").onclick = hideexercise2;
   // document.getElementById("show-exercise2").onclick = hideexercise1;
    document.getElementById("show-exercise1").onclick = showexercise1;
    document.getElementById("show-exercise2").onclick = showexercise2;
    document.getElementById("button-compare-data").onclick = exerciseOne;
    document.getElementById("button-gradient").onclick = excerciseTwo;
}

