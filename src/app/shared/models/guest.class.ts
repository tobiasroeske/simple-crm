import { SingleGuest } from "../interfaces/singleGuest.interface";

export class Guest implements SingleGuest{
    id!: string;
    firstName = '';
    lastName = '';
    email = '';
    arrivalDate!: number;
    leavingDate!: number;
    roomPreference: 'dorm' | 'private' | 'double'= 'dorm';
    allergies = 'No'
    allergyType = '';
    board = 'No';
    boardType = '';
    wetsuit = 'No';
    wetsuitSize = '';
    transfer = 'No'
    deposit = false;
    street = '';
    zipCode = 12345;
    city = '';

    // constructor(obj?: any) {
    //     this.id = obj ? obj.id : '';
    //     this.firstName = obj ? obj.firstName : '';
    //     this.lastName = obj ? obj.lastName : '';
    //     this.email = obj ? obj.email : '';
    //     this.arrivalDate = obj ? obj.arrivalDate : '';
    //     this.leavingDate = obj ? obj.leavingDate : '';
    //     this.roomPreference = obj ? obj.roomPreference : '';
    //     this.allergies = obj ? obj.allergies : '';
    //     this.allergyType = obj ? obj.allergyType: '';
    //     this.board = obj ? obj.board : '';
    //     this.boardType = obj ? obj.boardType : '';
    //     this.wetsuit = obj ? obj.wetsuit : '';
    //     this.wetsuitSize = obj ? obj.wetsuitSize : '';
    //     this.transfer = obj ? obj.transfer : '';
    //     this.deposit = obj ? obj.deposit : '';
    //     this.street = obj ? obj.street : '';
    //     this.zipCode = obj ? obj.zipCode : '';
    //     this.city = obj ? obj.city : '';
    // }

    // toJson() {
    //     return {
    //         firstName: this.firstName, 
    //         lastName: this.lastName,
    //         email: this.email,
    //         arrivalDate: this.arrivalDate,
    //         leavingDate: this.leavingDate,
    //         roomPreference: this.roomPreference,
    //         allergies: this.allergies,
    //         allergyType: this.allergyType,
    //         board: this.board, 
    //         boardType: this.boardType,
    //         wetsuit: this.wetsuit, 
    //         wetsuitSize: this.wetsuitSize,
    //         transfer: this.transfer, 
    //         deposit: this.deposit, 
    //         street: this.street, 
    //         zipCode: this.zipCode, 
    //         city: this.city 
    //     }
    // }

}