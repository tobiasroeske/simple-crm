import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'simple-crm-de2e6',
          appId: '1:378232036938:web:63d8f503c48e99d7ab10b3',
          storageBucket: 'simple-crm-de2e6.appspot.com',
          apiKey: 'AIzaSyCS1GK2BTkL8R8jg_P1JjP4592ODut21cs',
          authDomain: 'simple-crm-de2e6.firebaseapp.com',
          messagingSenderId: '378232036938',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
