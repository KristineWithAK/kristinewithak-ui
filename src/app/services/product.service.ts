import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { id: 1, name: 'Manifestation Candle (8oz)', price: 20, description: 'Energy-infused for intention setting.', image: '/assets/images/goddesswithin/manifestation-candle.jpg' },
    { id: 2, name: 'Soy Candle (8oz)', price: 15, description: 'All-natural soy candle in black tin.', image: '/assets/images/goddesswithin/soy-candle.jpg' },
    { id: 3, name: 'Wax Melts (6ct)', price: 8, description: 'Highly scented melts, clean burning.', image: '/assets/images/goddesswithin/wax-melts.jpg' },
    { id: 4, name: 'Perfume (10ML)', price: 10, description: 'Long-lasting fragrance in glass bottle.', image: '/assets/images/goddesswithin/perfume.jpg' },
  ];

  getProducts() {
    return this.products;
  }
}
