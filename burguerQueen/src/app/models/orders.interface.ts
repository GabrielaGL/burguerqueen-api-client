import { productsI } from "./products.interface";

export interface ordersI {
    id:number;
    table:number;
    userId:number;
    client:string;
    products:orderqtyI[];
    status:string;
    dataEntry:any;
    dateProcessed:any;
}

export interface orderqtyI {
    product:productsI[];
}