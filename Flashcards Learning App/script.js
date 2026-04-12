let cards = [
    { question: "What is HTML?", answer: "Markup language for web pages" },
    { question: "What is CSS?", answer: "Used for styling" },
    { question: "What is JS?", answer: "Adds interactivity" }
];

let currentIndex = 0;
let showingAnswer = false;

function showCard() {
    const cardText = document.getElementById("card-text");
    cardText.innerText = showingAnswer
        ? cards[currentIndex].answer
        : cards[currentIndex].question;
}

function flipCard() {
    showingAnswer = !showingAnswer;
    showCard();
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showingAnswer = false;
    showCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showingAnswer = false;
    showCard();
}

function addCard() {
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;

    if (question === "" || answer === "") {
        alert("Enter both question and answer");
        return;
    }

    cards.push({ question, answer });

    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
}

// Initialize first card
showCard();