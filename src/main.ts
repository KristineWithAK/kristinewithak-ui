// Randomly set favicon, apple-touch-icon, and android-chrome icons

const icons = [
  {
    favicon: '/icons/logo1/favicon.ico',
    favicon16: '/icons/logo1/favicon-16x16.png',
    favicon32: '/icons/logo1/favicon-32x32.png',
    appleTouchIcon: '/icons/logo1/apple-touch-icon.png',
    androidChrome192: '/icons/logo1/android-chrome-192x192.png',
    androidChrome512: '/icons/logo1/android-chrome-512x512.png'
  },
  {
    favicon: '/icons/logo2/favicon.ico',
    favicon16: '/icons/logo1/favicon-16x16.png',
    favicon32: '/icons/logo1/favicon-32x32.png',
    appleTouchIcon: '/icons/logo2/apple-touch-icon.png',
    androidChrome192: '/icons/logo2/android-chrome-192x192.png',
    androidChrome512: '/icons/logo2/android-chrome-512x512.png'
  }
];

// Randomly select an icon set
const randomIcon = icons[Math.floor(Math.random() * icons.length)];

// Update the favicon
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = randomIcon.favicon;

const existingFavicon = document.querySelector('link[rel="icon"]');
if (existingFavicon) {
  document.head.removeChild(existingFavicon);
}
document.head.appendChild(faviconLink);

// Update the apple-touch-icon
const appleTouchLink = document.createElement('link');
appleTouchLink.rel = 'apple-touch-icon';
appleTouchLink.href = randomIcon.appleTouchIcon;

const existingAppleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
if (existingAppleTouchIcon) {
  document.head.removeChild(existingAppleTouchIcon);
}
document.head.appendChild(appleTouchLink);

// Update the android-chrome-192x192 icon
const androidChrome192Link = document.createElement('link');
androidChrome192Link.rel = 'icon';
androidChrome192Link.setAttribute('sizes', '192x192');
androidChrome192Link.href = randomIcon.androidChrome192;

const existingAndroidChrome192 = document.querySelector('link[rel="icon"][sizes="192x192"]');
if (existingAndroidChrome192) {
  document.head.removeChild(existingAndroidChrome192);
}
document.head.appendChild(androidChrome192Link);

// Update the android-chrome-512x512 icon
const androidChrome512Link = document.createElement('link');
androidChrome512Link.rel = 'icon';
androidChrome512Link.setAttribute('sizes', '512x512');
androidChrome512Link.href = randomIcon.androidChrome512;

const existingAndroidChrome512 = document.querySelector('link[rel="icon"][sizes="512x512"]');
if (existingAndroidChrome512) {
  document.head.removeChild(existingAndroidChrome512);
}
document.head.appendChild(androidChrome512Link);

// Update the favicon-16x16 icon
const favicon16Link = document.createElement('link');
favicon16Link.rel = 'icon';
favicon16Link.setAttribute('sizes', '16x16');
favicon16Link.href = randomIcon.favicon16;

const existingFavicon16 = document.querySelector('link[rel="icon"][sizes="16x16"]');
if (existingFavicon16) {
  document.head.removeChild(existingFavicon16);
}
document.head.appendChild(favicon16Link);

// Update the favicon-32x32 icon
const favicon32Link = document.createElement('link');
favicon32Link.rel = 'icon';
favicon32Link.setAttribute('sizes', '32x32');
favicon32Link.href = randomIcon.favicon32;

const existingFavicon32 = document.querySelector('link[rel="icon"][sizes="32x32"]');
if (existingFavicon32) {
  document.head.removeChild(existingFavicon32);
}
document.head.appendChild(favicon32Link);

// Bootstrap the Angular application
import {bootstrapApplication} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter} from '@angular/router';
import {AppComponent} from './app/app.component';
import {routes} from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimationsAsync()],
}).catch(err => console.error(err));
