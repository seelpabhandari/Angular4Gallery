import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  allProducts = [];
  getProduct(id: number) {
    return Products.slice(0).find(prod => prod.id == id);
  }
  
  getProducts() {
    return this.allProducts = Products.slice(0);
  }
}
const Products = [
  { "id": 1, "name": "Scissors", "description": "use this to cut stuff", "price": "4.99" },
  { "id": 2, "name": "Sneak Kinves", "description": "use this to eat food with", "price": "10.99" },
  { "id": 3, "name": "Shot Glass", "description": "use this to take shots", "price": "5.99" },

]