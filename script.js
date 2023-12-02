document.body.style.backgroundColor = "#B2AA9F";
let magicBall = document.createElement('div');
magicBall.id = 'magic-ball';
magicBall.style.width = '215px';
magicBall.style.height = '215px';
magicBall.style.borderRadius = '50%';
magicBall.style.position = 'absolute';
magicBall.style.display = 'flex';
magicBall.style.justifyContent = 'center';
magicBall.style.alignItems = 'center';
magicBall.style.background = 'url("8.png")'; 
magicBall.style.backgroundSize = '350%';
magicBall.style.backgroundPosition = 'center';
let animationStyle = document.createElement('style');

document.head.appendChild(animationStyle);
document.body.appendChild(magicBall);
let questionText = document.createElement('div');
questionText.innerText = 'Does Santa Claus exist?';
questionText.style.color = "#463025"; 
questionText.style.fontFamily = "Courier, monospace";
questionText.style.fontSize = "20px";
questionText.style.position = 'absolute';

document.body.appendChild(questionText);

function moveBallAndQuestion(event) {
    let x = event.clientX;
    let y = event.clientY;

    magicBall.style.left = x - 100 + 'px';
    magicBall.style.top = y - 120 + 'px';

    questionText.style.top = y - 160 + 'px';
    questionText.style.left = x - questionText.clientWidth / 2 + 'px';
}

magicBall.addEventListener('click', function () {
    let randomAnswer = generateRandomAnswer();
    let answerText = document.createElement('span');
    answerText.innerText = randomAnswer;
    magicBall.innerHTML = ''; 
    answerText.style.fontSize = '20px'; 
    answerText.style.color = '#463025';
	answerText.style.fontFamily = "Courier, monospace";
    magicBall.appendChild(answerText);
});
document.addEventListener('mousemove', moveBallAndQuestion);
function generateRandomAnswer() {
    let answers = ["Yes", "Ask again!)", "Of course", "Wait for gifts!)", "Santa is behind you", "Try again", "What?", "Check Christmas tree!)"];
    
    let randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}
