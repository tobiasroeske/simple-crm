import { Injectable, inject } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { SingleGuest } from '../../interfaces/singleGuest.interface';
import { Guest } from '../../models/guest.class';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  firebaseService = inject(FirebaseService);
  route = inject(ActivatedRoute);
  guest!: SingleGuest;
  constructor() { }

  getRightDateFormat(timestamp: number) {
    let birthdate = new Date(timestamp);
    let month = (birthdate.getMonth() + 1).toString().padStart(2, '0'); // Monat (+1, da die Monate von 0 bis 11 gehen)
    let day = birthdate.getDate().toString().padStart(2, '0'); // Tag
    let year = birthdate.getFullYear().toString(); // Jahr
    return `${month}/${day}/${year}`;
  }

  capitalizeFirstLetter(str: string) {
    return str.split(' ').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

  calculateNumberOfDays(startTimestamp: number, endTimestamp: number) {
    // Milliseconds per day
    const millisecondsPerDay: number = 1000 * 60 * 60 * 24;

    let differenceInMilliseconds: number = endTimestamp - startTimestamp;
    let amountOfDays: number = Math.round(differenceInMilliseconds / millisecondsPerDay);
    return amountOfDays;
  }
}
