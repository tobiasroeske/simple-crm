import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

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
