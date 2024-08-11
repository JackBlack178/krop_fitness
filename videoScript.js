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
// pauseButton.appendChild(imgElement); // Добавляем иконку в кнопку
pauseButton.innerHTML = 'Pause'

button.addEventListener('click', playPauseMedia);
pauseButton.addEventListener('click', playPauseMedia);

let pauseButtonEntered = false;
let hidePauseButtonTimeout;

// Функция для отображения кнопки паузы
function showPauseButton() {
    pauseButton.style.visibility = 'visible';
}

// Функция для скрытия кнопки паузы с задержкой
function hidePauseButton() {
    hidePauseButtonTimeout = setTimeout(() => {
        if (!pauseButtonEntered) {
            pauseButton.style.visibility = 'hidden';
        }
    }, 200);
}

// Обработчик для отслеживания, когда указатель мыши находится на кнопке
pauseButton.addEventListener('mouseenter', () => {
    pauseButtonEntered = true;
    pauseButton.style.visibility = 'visible';
    clearTimeout(hidePauseButtonTimeout); // Очистить таймер, чтобы кнопка не скрылась
});

pauseButton.addEventListener('mouseleave', () => {
    pauseButtonEntered = false;
    hidePauseButton(); // Скрыть кнопку с задержкой
});

video.addEventListener('mouseenter', () => {
    if (!video.paused) {
        showPauseButton(); // Показать кнопку, если видео не на паузе
    }
});

video.addEventListener('mouseleave', () => {
    if (!pauseButtonEntered) {
        hidePauseButton(); // Скрыть кнопку с задержкой
    }
});

video.addEventListener('click', () => {
    if (!video.paused) {
        showPauseButton(); // Показать кнопку при клике на видео
    }
});

function playPauseMedia() {
    if (video.paused) {
        video.play();
        button.style.visibility = 'hidden';
        pauseButton.style.visibility = 'hidden';
    } else {
        video.pause();
        button.style.visibility = 'visible';
        pauseButton.style.visibility = 'hidden';
    }
}

// Вставляем кнопку паузы прямо после кнопки воспроизведения
button.insertAdjacentElement('afterend', pauseButton);
pauseButton.style.visibility = 'hidden';
