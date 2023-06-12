export interface ordersI {
    id: number;
    table: number;
    client: string;
    products: orderProductsI[];
    status: string;
    dataEntry: any;
    dateProcessed: any;
}

interface orderProductsI {
    qty: number;
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
        type: string;
        dateEntry: string;
        qty:number;
    };
}