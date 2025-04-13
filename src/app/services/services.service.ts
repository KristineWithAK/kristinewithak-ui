import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  servicePackages = [
    {
      category: '🎉 Event Services',
      serviceItems: [
        {
          name: 'Event Hosting',
          description: 'Let us bring the energy, organization, and elegance. You enjoy the spotlight.',
          price: 'Starting at $100/hr (plus travel)'
        },
        {
          name: 'Event Planning',
          description: 'From concept to clean-up, we’ll handle every detail so you can shine.',
          price: 'Starting at $350 (plus venue & applicable fees)'
        }
      ]
    },
    {
      category: '🎨 Creative Marketing & Branding',
      serviceItems: [
        {
          name: 'Promo Video Package',
          description: 'Eye-catching reels, teasers, and sizzle videos',
          price: 'Starting at $20'
        },
        {
          name: 'Event Flyer Package',
          description: 'Custom graphics for digital or print',
          price: 'Starting at $40'
        },
        {
          name: 'Price List/Product Menu',
          description: 'Stylish, easy-to-read designs that sell',
          price: 'Starting at $30'
        },
        {
          name: 'Business Logo Package',
          description: 'Professional branding that speaks your story',
          price: 'Starting at $50'
        }
      ]
    }
  ];
  getServices() {
    return this.servicePackages
  }
}
