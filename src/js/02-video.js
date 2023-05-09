import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const VIDEO_PLAYER_TIME_STORAGE_KEY = 'video-player-current-time';

updateCurrentTime();

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(data) {
  localStorage.setItem(VIDEO_PLAYER_TIME_STORAGE_KEY, data.seconds);
  console.log(data.seconds);
}

function updateCurrentTime() {
  const persistedData = localStorage.getItem(VIDEO_PLAYER_TIME_STORAGE_KEY);

  if (!persistedData) return;
  player.setCurrentTime(parseFloat(persistedData));
}
