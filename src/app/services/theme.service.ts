import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(this.getSystemPreference());
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor() {
    if (this.isBrowser()) {
      this.listenToSystemPreferenceChanges();
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  private getSystemPreference(): boolean {
    if (this.isBrowser()) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false; // Default to light mode in SSR
  }

  private listenToSystemPreferenceChanges(): void {
    if (this.isBrowser()) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        this.isDarkModeSubject.next(event.matches);
      });
    }
  }

  get isDarkMode(): boolean {
    return this.isDarkModeSubject.value;
  }
}
