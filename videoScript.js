const button = document.querySelector('button[class="join-us-video-play-button"]');
const video = document.querySelector('video');

const pauseButton = document.createElement('button');
pauseButton.classList = 'join-us-video-play-button pause-button-hover';
pauseButton.style.visibility = 'hidden'; // Скрываем кнопку по умолчанию

const imgElement = document.createElement('img');
imgElement.src = 'icons/pause.svg';
imgElement.alt = 'Pause Icon';
imgElement.style.width = '24px';
imgElement.style.height = '24px';
// pauseButton.appendChild(imgElement);
pauseButton.innerHTML = 'Pause'

button.addEventListener('click', ()=>video.play());
pauseButton.addEventListener('click', ()=>video.pause());

let pauseButtonEntered = false;
let hidePauseButtonTimeout;


function showPauseButton() {
    pauseButton.style.visibility = 'visible';
}

const delay = (cb, ms) => setTimeout(cb, ms)

function hidePauseButton() {
    hidePauseButtonTimeout = setTimeout(() => {
        if (!pauseButtonEntered) {
            pauseButton.style.visibility = 'hidden';
        }
    }, 200);
}



pauseButton.addEventListener('mouseenter', () => {
    pauseButtonEntered = true;
    pauseButton.style.visibility = 'visible';
    clearTimeout(hidePauseButtonTimeout)
});

pauseButton.addEventListener('mouseleave', () => {
    pauseButtonEntered = false;
    hidePauseButton();
});



video.addEventListener('pause', () => {
    playPauseMedia()
})

video.addEventListener('play', () => {
    playPauseMedia()
})

video.addEventListener('mouseenter', () => {
    if (!video.paused) {
        showPauseButton();
    }
});

video.addEventListener('mouseleave', () => {
    if (!pauseButtonEntered) {
        hidePauseButton();
    }
});

video.addEventListener('click', () => {
    if (!video.paused) {
        showPauseButton();
    }
});

function playPauseMedia() {
    if (!video.paused && !video.ended) {
        button.style.visibility = 'hidden';
        delay(()=>pauseButton.style.visibility = 'visible',300)
    } else {
        pauseButton.style.visibility = 'hidden';
        delay(()=>button.style.visibility = 'visible', 300)
    }
}


button.insertAdjacentElement('afterend', pauseButton);
pauseButton.style.visibility = 'hidden';
