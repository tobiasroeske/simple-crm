export class User {
    id?: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    arrivalDate!: number;
    leavingDate!: number;
    roomPreference!: "private" | "double" | "dorm";
    allergies!: string;
    board = false;
    wetsuit = false;
    transfer!: string;
    deposit = false;
    street!: string;
    zipCode!: number;
    city!: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.arrivalDate = obj ? obj.arrivalDate : '';
        this.leavingDate = obj ? obj.leavingDate : '';
        this.roomPreference = obj ? obj.roomPreference : '';
        this.allergies = obj ? obj.allergies : '';
        this.board = obj ? obj.board : '';
        this.wetsuit = obj ? obj.wetsuit : '';
        this.transfer = obj ? obj.transfer : '';
        this.deposit = obj ? obj.deposit : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    toJson() {
        return {
            firstName: this.firstName, 
            lastName: this.lastName,
            email: this.email,
            arrivalDate: this.arrivalDate,
            leavingDate: this.leavingDate,
            roomPreference: this.roomPreference,
            allergies: this.allergies,
            board: this.board, 
            wetsuit: this.wetsuit, 
            transfer: this.transfer, 
            deposit: this.deposit, 
            street: this.street, 
            zipCode: this.zipCode, 
            city: this.city 
        }
    }
}