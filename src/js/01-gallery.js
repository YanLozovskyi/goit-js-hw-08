// Импортируем массив объектов с данными о картинках из отдельного модуля
import { galleryItems } from './gallery-items';

// Импортируем класс SimpleLightbox из библиотеки simplelightbox и её стили
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
// Получаем ссылку на контейнер для размещения картинок
const imageContainer = document.querySelector('.gallery');

// Генерируем разметку карточек с картинками
const cardsMarkup = createImageCardsMarkup(galleryItems);

// Добавляем стиль для скрытия маркера списка
imageContainer.style.listStyle = 'none';

// Добавляем разметку в контейнер
imageContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// Функция для генерации разметки карточек картинок
function createImageCardsMarkup(Items) {
  return Items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  }).join('');
}

// Инициализируем SimpleLightbox для элементов внутри контейнера
new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // устанавливаем данные для подписей к картинкам
  captionDelay: 250, // задержка для появления подписей
});