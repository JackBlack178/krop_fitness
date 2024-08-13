const button = document.querySelector('button[class="join-us-video-play-button"]');
const video = document.querySelector('video');

const pauseButton = document.createElement('button');
pauseButton.classList = 'join-us-video-play-button pause-button-hover';
pauseButton.style.display = 'none';

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
    pauseButton.style.display = 'block';
}

const delay = (cb, ms) => setTimeout(cb, ms)

function hidePauseButton() {
    hidePauseButtonTimeout = setTimeout(() => {
        if (!pauseButtonEntered) {
            pauseButton.style.display = 'none';
        }
    }, 200);
}



pauseButton.addEventListener('mouseenter', () => {
    pauseButtonEntered = true;
    pauseButton.style.display = 'block';
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
        button.style.display = 'none';
        delay(()=>pauseButton.style.display = 'block',100)
    } else {
        pauseButton.style.display = 'none';
        delay(()=>button.style.display = 'block', 100)
    }
}


button.insertAdjacentElement('afterend', pauseButton);
pauseButton.style.display = 'none';
