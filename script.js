let score = 0;
const winningScore = 10;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.top = '0px';

    document.querySelector('.snow').appendChild(snowflake);

    let fallInterval = setInterval(() => {
        let top = parseFloat(snowflake.style.top);
        if (top < window.innerHeight) {
            snowflake.style.top = top + 5 + 'px';
        } else {
            clearInterval(fallInterval);
            snowflake.remove();
        }
    }, 100);

    snowflake.addEventListener('click', () => {
        score++;
        document.getElementById('score').innerText = score;
        clearInterval(fallInterval);
        snowflake.remove();

        if (score === winningScore) {
            showCongratulations();
        }
    });
}

function showCongratulations() {
    const congratsMessage = document.createElement('div');
    congratsMessage.innerText = "Поздравляем! Вы собрали 10 снежинок! С новым годом!";
    congratsMessage.style.position = 'fixed';
    congratsMessage.style.top = '50%';
    congratsMessage.style.left = '50%';
    congratsMessage.style.transform = 'translate(-50%, -50%)';
    congratsMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    congratsMessage.style.color = 'white';
    congratsMessage.style.padding = '20px';
    congratsMessage.style.borderRadius = '10px';
    congratsMessage.style.zIndex = '3'; 

    document.body.appendChild(congratsMessage);

    setTimeout(() => {
        congratsMessage.remove();
    }, 10000);
}


setInterval(createSnowflake, 100);
