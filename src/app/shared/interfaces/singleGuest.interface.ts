export interface SingleGuest {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    arrivalDate: number;
    leavingDate: number;
    roomPreference: "private" | "double" | "dorm";
    allergies: string;
    allergyType: string;
    board: string;
    boardType: string;
    wetsuit: string;
    wetsuitSize: string;
    transfer: string;
    deposit: boolean;
    street: string;
    zipCode: number;
    city: string;
}