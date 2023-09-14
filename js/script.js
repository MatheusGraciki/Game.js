// Select the Player in the game
const playerMario = document.querySelector('.mario');

// Control variable for Mario's jump
let isJumping = false;

// Variable to store Mario's horizontal position in percentage
let marioPositionXPercent = 0;

// Function to execute Mario's jump
const jump = () => {
    if (!isJumping) {
        isJumping = true;
        playerMario.classList.add('jump');
        detectCollision();

        setTimeout(() => {
            playerMario.classList.remove('jump');
            isJumping = false;
            detectCollision();
        }, 450);
    }
};

// Function to move Mario forward or backward
const moveMario = (direction) => {
    if (direction === 'backward') {
        playerMario.classList.add('flip');
        marioPositionXPercent -= 1;
    } else {
        playerMario.classList.remove('flip');
        marioPositionXPercent += 1;
    }
    playerMario.style.left = marioPositionXPercent + '%';
};

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
        case 'ArrowUp':
            jump();
            break;

        case 'd':
        case 'ArrowRight':
            moveMario('forward');
            break;

        case 'a':
        case 'ArrowLeft':
            moveMario('backward');
            break;

        default:
            break;
    }
});
