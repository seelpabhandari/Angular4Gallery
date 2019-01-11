import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  visibleImages = [];
  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(Image => Image.id == id)
  }
}

const IMAGES = [
  { "id": 0, "category": "Boats", "caption": "view for a boat", "url": "assets/img/img_01.jpg" },
  { "id": 1, "category": "Boats", "caption": "view for a boat", "url": "assets/img/img_02.jpg" },
  { "id": 2, "category": "Boats", "caption": "view for a boat", "url": "assets/img/img_03.jpg" },
  { "id": 3, "category": "Boats", "caption": "view for a boat", "url": "assets/img/img_04.jpg" },
  { "id": 4, "category": "Camping", "caption": "view for a boat", "url": "assets/img/img_05.jpg" },
  { "id": 5, "category": "Camping", "caption": "view for a boat", "url": "assets/img/img_06.jpg" },
  { "id": 6, "category": "Camping", "caption": "view for a boat", "url": "assets/img/img_07.jpg" },
  { "id": 7, "category": "Camping", "caption": "view for a boat", "url": "assets/img/img_08.jpg" },
  { "id": 8, "category": "Camping", "caption": "view for a boat", "url": "assets/img/img_09.jpg" },
  { "id": 9, "category": "Camping", "caption": "view for a boat", "url": "assets/img/img_10.jpg" },
  { "id": 10, "category": "Camping", "caption": "view for a boat", "url": "assets/img/img_11.jpg" },
  { "id": 11, "category": "Library", "caption": "view for a boat", "url": "assets/img/img_12.jpg" },
  { "id": 12, "category": "Library", "caption": "view for a boat", "url": "assets/img/img_13.jpg" }
]