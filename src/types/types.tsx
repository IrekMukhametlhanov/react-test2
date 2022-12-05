export interface IAddress{
    street: string;
    city: string;
    zipcode: string;
}


export interface Iuser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}