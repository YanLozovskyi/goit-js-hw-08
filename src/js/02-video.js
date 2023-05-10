import Player from '@vimeo/player'; // импортируем класс Player из библиотеки Vimeo Player
import throttle from 'lodash.throttle'; // импортируем функцию throttle из библиотеки Lodash

const iframe = document.querySelector('#vimeo-player'); // получаем элемент iframe из DOM
const player = new Player(iframe); // создаем объект плеера Vimeo Player, передавая ему iframe в качестве параметра
const VIDEO_PLAYER_TIME_STORAGE_KEY = 'video-player-current-time'; // создаем константу для ключа localStorage

updateCurrentTime(); // вызываем функцию для обновления текущего времени видео из localStorage

// назначаем обработчик события 'timeupdate' на плеер Vimeo Player с помощью функции throttle, чтобы сохранять текущее время видео в localStorage с задержкой в 1000 мс
player.on('timeupdate', throttle(saveCurrentTime, 1000));

// функция для сохранения текущего времени видео в localStorage
function saveCurrentTime(data) {
  localStorage.setItem(VIDEO_PLAYER_TIME_STORAGE_KEY, data.seconds); // сохраняем текущее время видео в localStorage, используя ключ VIDEO_PLAYER_TIME_STORAGE_KEY
  console.log(data.seconds); // выводим в консоль текущее время видео
}

// функция для обновления текущего времени видео из localStorage
function updateCurrentTime() {
  const persistedData = localStorage.getItem(VIDEO_PLAYER_TIME_STORAGE_KEY); // получаем сохраненное значение текущего времени видео из localStorage

  if (!persistedData) return; // если сохраненное значение отсутствует, то выходим из функции
  player.setCurrentTime(parseFloat(persistedData)); // устанавливаем текущее время видео на плеере Vimeo Player, преобразовав сохраненное значение из строки в число с помощью функции parseFloat
}

