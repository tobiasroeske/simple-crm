import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, doc, onSnapshot } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { SingleUser } from '../../interfaces/singleUser.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore = inject(Firestore)
  unsubUsers;
  userList: SingleUser[] = [];

  constructor() {
    this.unsubUsers = this.unsubUsersList();
  }

  ngOnDestroy(): void {
    this.unsubUsers();
  }

  async addUser(user: any) {
    const docRef = await addDoc(this.getUsersRef(), user)
      .catch(err => console.error(err));
  }

  getUsersRef() {
    return collection(this.firestore, 'guests');
  }

  unsubUsersList() {
    return onSnapshot(this.getUsersRef(), list => {
      this.userList = [];
      list.forEach(user => {
        let singleUser: SingleUser = this.setUserObject(user.data(), user.id)
        this.userList.push(singleUser);
      })
      console.log(this.userList);
    })
  }

  setUserObject(obj: any, id: string) {
    return {
      id: id || '',
      firstName: obj.firstName || '',
      lastName: obj.lastName || '',
      email: obj.email || '',
      arrivalDate: obj.arrivalDate || '',
      leavingDate: obj.leavingDate || '',
      roomPreference: obj.roomPreference || '',
      allergies: obj.allergies || '',
      board: obj.board || '',
      transfer: obj.transfer || '',
      deposit: obj.deposit || '',
      street: obj.street || '',
      zipCode: obj.zipCode || '',
      city: obj.city || ''
    };
  }


}
