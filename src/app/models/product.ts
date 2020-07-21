export class Product {
    
    available: boolean;
    rating: number;
    imageurl: string;

    constructor(public code: string, public name: string, public price: number){}
        
}
