export interface SingleUser {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    arrivalDate: number;
    leavingDate: number;
    roomPreference: "private" | "double" | "dorm";
    allergies: string;
    board: boolean;
    transfer: string;
    deposit: boolean;
    street: string;
    zipCode: number;
    city: string;
}