import { Product } from "./product.model";

export class CartData {
    product: Product;
    count = 0;

    constructor(product: Product) {
        this.product = product;
        this.count = 1;
    }
    
    incrCount() {
        this.count++;
        return this;
    }
}