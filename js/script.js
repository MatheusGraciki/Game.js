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

// Define mystery blocks with initially hidden visibility
const mysteryBlocks = {
    myDegrees: {
        element: document.querySelector('#mystery-block-myDegrees'),
        isVisible: false
    },
    aboutMe: {
        element: document.querySelector('#mystery-block-aboutMe'),
        isVisible: false
    },
    myHobbies: {
        element: document.querySelector('#mystery-block-myHobbies'),
        isVisible: false
    }
};

// Function to toggle the visibility of a mystery block
function toggleMysteryBlockVisibility(blockName) {
    const block = mysteryBlocks[blockName];
    const blockTextField = document.querySelector(`#${blockName}-textField`);

    block.isVisible = !block.isVisible;
    blockTextField.style.display = block.isVisible ? 'block' : 'none';
}

// Function to detect collisions between Mario and mystery blocks
function detectCollision() {
    const marioRect = playerMario.getBoundingClientRect();

    
    Object.keys(mysteryBlocks).forEach((blockName) => {
        const block = mysteryBlocks[blockName];
        const blockRect = block.element.getBoundingClientRect();
        // Adds margin to detect collisions more at center than the borders of the block
        const marginX = blockRect.width * 0.25;
        const marginY = blockRect.height * 0.25;

        if (
            marioRect.top + marioRect.height >= blockRect.top + marginY &&
            marioRect.left + marioRect.width >= blockRect.left + marginX &&
            marioRect.right - marioRect.width <= blockRect.right - marginX
        ) {
            console.log(`Detected collision in the block ${blockName}!`);
            toggleMysteryBlockVisibility(blockName);
        }
    });
}
