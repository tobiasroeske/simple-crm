import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDoc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { Guest } from '../../models/guest.class';
import { SingleGuest } from '../../interfaces/singleGuest.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore = inject(Firestore)
  unsubGuests;
  unsubSingleGuestDetail: any;
  guestList: SingleGuest[] = [];
  singleGuest!: SingleGuest;
  guestId!: string;

  constructor() {
    this.unsubGuests = this.unsubGuestsList();
  }

  ngOnDestroy(): void {
    this.unsubGuests();
    this.unsubSingleGuestDetail();
  }

  async addUser(guest: any) {
    const docRef = await addDoc(this.getGuestsRef(), this.getCleanJson(guest))
      .catch(err => console.error(err))
      .then((docRef) => {
        if (docRef?.id) {
          this.guestId = docRef?.id;
          updateDoc(this.getSingleGuestRef(this.guestId), {id: this.guestId} )
        }
      })
  }

  async updateGuest(guest:SingleGuest) {
    if (guest.id) {
      await updateDoc(this.getSingleGuestRef(guest.id), this.getCleanJson(guest))
      .catch(err => console.error(err));
    }
  }

  getGuestsRef() {
    return collection(this.firestore, 'guests');
  }

  getSingleGuestRef(guestId:string ) {
    return doc(this.getGuestsRef(), guestId)
  }

  async getGuestDetail(id:string) {
    const docRef = doc(this.getGuestsRef(), id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      this.singleGuest = this.setGuestObject(docSnap.data(), docSnap.id);
    } else {
      console.error("No such document!");
    }
  }

  unsubGuestsList() {
    return onSnapshot(this.getGuestsRef(), list => {
      this.guestList = [];
      list.forEach(user => {
        let singleUser: SingleGuest = this.setGuestObject(user.data(), user.id)
        this.guestList.push(singleUser);
      })
    })
  }

  unsubSingleGuest(guestId:string) {
    let unsub =  onSnapshot(this.getSingleGuestRef(guestId), guest => {
      this.singleGuest = this.getCleanJson(guest.data());
      console.log('singleuser: ',this.singleGuest);
      
    });
    this.unsubSingleGuestDetail = unsub;
  }

  getCleanJson(obj: any) {
    return {
      id: obj.id ? obj.id : '',
      firstName: obj.firstName, 
      lastName: obj.lastName,
      email: obj.email,
      arrivalDate: obj.arrivalDate,
      leavingDate: obj.leavingDate,
      roomPreference: obj.roomPreference,
      allergies: obj.allergies,
      allergyType: obj.allergyType,
      board: obj.board,
      boardType: obj.boardType,
      wetsuit: obj.wetsuit, 
      wetsuitSize: obj.wetsuitSize,
      transfer: obj.transfer, 
      deposit: obj.deposit, 
      street: obj.street, 
      zipCode: obj.zipCode, 
      city: obj.city 
    }        
    
  }

  setGuestObject(obj: any, id: string) {
    return {
      id: id || '',
      firstName: obj.firstName || '',
      lastName: obj.lastName || '',
      email: obj.email || '',
      arrivalDate: obj.arrivalDate || '',
      leavingDate: obj.leavingDate || '',
      roomPreference: obj.roomPreference || 'need to ask',
      allergies: obj.allergies || 'need to ask',
      allergyType: obj.allergyType || 'need to ask',
      board: obj.board || 'need to ask',
      boardType: obj.boardType || 'brings own board',
      wetsuit: obj.wetsuit || 'need to ask',
      wetsuitSize: obj.wetsuitSize || 'brings own suit',
      transfer: obj.transfer || 'need to ask',
      deposit: obj.deposit || 'need to ask',
      street: obj.street || 'need to ask',
      zipCode: obj.zipCode || 'need to ask',
      city: obj.city || 'need to ask'
    };
  }
}
