import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: "AIzaSyA4uwz5sfLu9uy2N4_OAuGP55-crj1RSRg",
  authDomain: "test-7c-af41c.firebaseapp.com",
  databaseURL: "https://test-7c-af41c-default-rtdb.firebaseio.com",
  projectId: "test-7c-af41c",
  storageBucket: "test-7c-af41c.appspot.com",
  messagingSenderId: "389682219831",
  appId: "1:389682219831:web:0e3c66d2fdd11ca4f7a8b2",
  measurementId: "G-03BSFCNHE1"
};


function getFirebaseApp() {
  try {
    return getApp();
  } catch {
    return initializeApp(firebaseConfig);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase())
  ]
};