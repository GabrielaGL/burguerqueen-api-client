export interface ordersI {
    id?: number;
    table: number | null;
    client: string | null;
    products: productsI[];
    status: string | null
    dataEntry: any;
    dateProcessed: any;
}

export interface productsI {
    id: number;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry: string;
    qty: number;
}