const getQuotes = () =>{
const quotes =  [
    "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
    "The most important thing is to enjoy your life - to be happy - it's all that matters.",
    "Beware the barrenness of a busy life",
    "The good life is one inspired by love and guided by knowledge.",
    "Live life to the fullest"
];

let currentQuoteIndex = 0;
const quoteDisplay = document.getElementById("quote-display");

function changeQuote() {
    quoteDisplay.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

// Display the first quote immediately
changeQuote();

// Change the quote every 2 seconds
setInterval(changeQuote, 2000);
}



        const createRainbow = () => {
            const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
            const rainbowContainer = document.getElementById("rainbow");
            const potOfGold = document.getElementById("pot-of-gold");
            const rainbowButton = document.getElementById("rainbow-button");
            
            rainbowButton.disabled = true;
            let delay = 0;

            for (let color of colors) {
                setTimeout(() => {
                    const colorStrip = document.createElement("p");
                    colorStrip.style.backgroundColor = color;
                    rainbowContainer.appendChild(colorStrip);
                }, delay);
                delay += 1000; // Add a new color strip every 1 second
            }

            // Show the pot of gold after the rainbow is complete
            setTimeout(() => {
                potOfGold.style.display = "block";
            }, delay + 1000); // Wait for an additional second
            rainbowButton.addEventListener("click", createRainbow);
        }

        

        window.onload = () => {
            document.getElementById("rainbow-button").onclick = createRainbow;
            getQuotes();
        }