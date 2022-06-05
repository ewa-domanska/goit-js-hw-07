import {galleryItems} from './gallery-items.js';

// Change code below this line

let html = "";
let gallery = document.querySelector(".gallery")
for (const galleryItem of galleryItems) {
    html = html + `<div class="gallery__item">
  <a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
}

gallery.innerHTML = html;

function showBigPicture(e) {
    e.preventDefault();
    let image = e.target;
    const bigPictureModal = basicLightbox.create(`<img src="${image.dataset.source}"/>`)

    bigPictureModal.show();

    gallery.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
            bigPictureModal.close();
        }
    })
}

gallery.addEventListener("click", showBigPicture);
