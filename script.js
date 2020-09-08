const score = document.querySelector('.score'),
      start = document.querySelector('.start'),
      gameArea = document.querySelector('.gameArea'),
      car = document.createElement('div');
      car.classList.add('car');

start.addEventListener('click', startGame);
//обработчики собыйтий на кнокпи стрелки чтобы машина ехала
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
     ArrowUp: false, 
     ArrowDown: false,
     ArrowLeft: false,
     ArrowRight: false
}

const settings = { 
    start:false,
    score: 0, 
    speed: 3
}

function startGame () {
    start.classList.add('hide');
    settings.start = true; // значению объекта сеттинг присвоить тру 
    requestAnimationFrame(playGame); // ф анимации запускает ф игры 
    gameArea.appendChild(car);
}


function playGame () {
    if(settings.start){
    requestAnimationFrame(playGame);
    }
// рекрусия чтобы перезапускала сама себя для плавности в данном случ 
}

function startRun (e) {
    e.preventDefault();
    keys[e.key] = true; // объект[свойство объекта из объекта эвент]

}

function stopRun (e) {
    e.preventDefault();
    keys[e.key] = false;
}

