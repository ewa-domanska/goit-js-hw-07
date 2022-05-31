import { galleryItems } from './gallery-items.js';
// Change code below this line

let html = "";
let gallery = document.querySelector(".gallery")
for (const galleryItem of galleryItems) {
    console.log(galleryItem);
    html = html + `<div class="gallery__item">
  <a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>`
}

gallery.innerHTML =
