import { galleryItems } from './gallery-items';
// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

imageContainer.style.listStyle = 'none';

imageContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImageCardsMarkup(Items) {
  return Items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  }).join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
