const runningMan = () => {

function toggleRunningMan() {

    if (runningMan.src.includes('walking')) {

        runningMan.src = 'running.png';

    } else {

        runningMan.src = 'walking.png';

    }

}

// Interval to continuously move the running man and toggle images

let manPosition = 0;

setInterval(() => {

    manPosition += 10;

    runningMan.style.setProperty('--man-left', `${manPosition}px`);

    toggleRunningMan();

}, 500); 

}

const partTwo = () => {

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
    document.getElementById("button-gradient").onclick = partTwo;
    document.getElementById("walking.png").onclick = runningMan;


}