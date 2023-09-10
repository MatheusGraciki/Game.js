    const mario = document.querySelector('.mario');
    const jump = () =>{
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        },450)
    } 

    let positionXPercent = 0;
    
    const moveForward = () =>{
        mario.classList.remove('flip');
        positionXPercent += 1;
        mario.style.left = (positionXPercent + '%')
    }

    const moveBackward = () =>{
        mario.classList.add('flip');
        positionXPercent -= 1;
        mario.style.left = (positionXPercent + '%')
    }

    document.addEventListener('keydown', (event) =>{
        switch (event.key) {
            case 'w': 
            case 'ArrowUp': jump(); break;                
            
            case 'd': 
            case 'ArrowRight':moveForward(); break;

            case 'a':
            case 'ArrowLeft': moveBackward(); break;
        
            default:
                break;
        }
    })
    