const crystalBall = document.getElementById('crystal-ball');
const answerDisplay = document.getElementById('answer');
const shakeButton = document.getElementById('shake-button');

const responses = [
    "Yes - definitely.",
    "It is decidedly so.",
    "Without a doubt.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getRandomResponse() {
    return responses[Math.floor(Math.random() * responses.length)];
}

function displayAnswer() {
    const userQuestion = "Should I eat pizza tomorrow?"; // Replace with user's question
    const randomResponse = getRandomResponse();

    answerDisplay.textContent = `Question: ${userQuestion}`;
    setTimeout(() => {
        answerDisplay.textContent = `8 Ball: ${randomResponse}`;
    }, 1000); // Delay the answer display for a second for added mystique
}

shakeButton.addEventListener('click', () => {
    crystalBall.classList.add('shake');
    setTimeout(() => {
        crystalBall.classList.remove('shake');
        displayAnswer();
    }, 1000); // Delay the answer display for a second after shaking
});
