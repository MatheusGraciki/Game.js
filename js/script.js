const mario = document.querySelector('.mario');
const mysteryBlocks = {
    myDegrees: document.querySelector('#mystery-block-myDegrees'),
    aboutMe: document.querySelector('#mystery-block-aboutMe'),
    myHobbies: document.querySelector('#mystery-block-myHobbies')
};

const fieldVisibility = {
    myDegrees: false,
    aboutMe: false,
    myHobbies: false
};

function toggleField(field) {
    const fieldElement = document.querySelector(`#${field}-field`);
    fieldElement.style.display = fieldVisibility[field] ? 'none' : 'block';
    fieldVisibility[field] = !fieldVisibility[field];
}

let isJumping = false;

const jump = () => {
    if (!isJumping) {
        isJumping = true;
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
            // Verificar colisão após o pulo
            isJumping = false;
        }, 450);
        
    }
    detectCollision();
};

let positionXPercent = 0;

const moveForward = () => {
    mario.classList.remove('flip');
    positionXPercent += 1;
    mario.style.left = positionXPercent + '%';
};

const moveBackward = () => {
    mario.classList.add('flip');
    positionXPercent -= 1;
    mario.style.left = positionXPercent + '%';
};

// Função para detectar colisão vertical
function detectCollision() {
    const marioRect = mario.getBoundingClientRect();

    Object.keys(mysteryBlocks).forEach((block) => {
        const mysteryBlockRect = mysteryBlocks[block].getBoundingClientRect();

        if (
            marioRect.top >= mysteryBlockRect.top &&
            marioRect.left <= mysteryBlockRect.right &&
            marioRect.right >= mysteryBlockRect.left
        ) {
            console.log(`Colisão detectada no bloco ${block}!`);
            toggleField(block);
        }
    });
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
        case 'ArrowUp':
            jump();
            break;

        case 'd':
        case 'ArrowRight':
            moveForward();
            break;

        case 'a':
        case 'ArrowLeft':
            moveBackward();
            break;

        default:
            break;
    }
});
