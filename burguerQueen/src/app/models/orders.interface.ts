import { productsI } from "./products.interface";

export interface ordersI {
    id:number;
    waitress:string;
    table:number;
    userId:number;
    client:string;
    products:orderqtyI[];
    status:string;
    dataEntry:any;
    dateProcessed:any;
}

export interface orderqtyI {
    qty:number;
    product:productsI[];
}