import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';


const firebaseConfig = {
  apiKey: "AIzaSyCS1GK2BTkL8R8jg_P1JjP4592ODut21cs",
  authDomain: "simple-crm-de2e6.firebaseapp.com",
  projectId: "simple-crm-de2e6",
  storageBucket: "simple-crm-de2e6.appspot.com",
  messagingSenderId: "378232036938",
  appId: "1:378232036938:web:63d8f503c48e99d7ab10b3"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom([
      provideFirebaseApp( () => initializeApp(environment.firebaseConfig)),
       provideFirestore(() => getFirestore()),
       provideAuth(() => getAuth())
    ]
    )],
};
