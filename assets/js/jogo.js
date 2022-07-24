const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add("jump"); 

    setTimeout(() => {
        mario.classList.remove('jump');  
       }, 500);

}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '/assets/images/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        clouds.style.animation='none';

        clearInterval(loop);
        switchModal();

        
    }

}, 10);

document.addEventListener('keydown', jump);

const switchModal = () => {
    const modal = document.querySelector('.modal');;
    const actualstyle = modal.style.display;

    if(actualstyle == 'block') {
        modal.style.display = 'none'
    } else{
        modal.style.display = 'block'
    }
}

function recarregar() {
    location.reload();
}