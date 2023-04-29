import { Store } from "../models/interfaces/store.interface";
import { Product } from "../models/product.model";
import { ProductStock } from "../models/product_stock.model";
import { StoreService } from "../services/store.service";

export class StoreController {
    private storeService: Store;
    constructor() {
        this.storeService = new StoreService();
    }

    addProduct(product: Product, quantity?: number) {
        this.storeService.addProduct(product, quantity);
    }

    removeProduct(sku: string, quantity?: number) {
        this.storeService.removeProductFromInventory(sku, quantity);
    }

    getProduct(sku: string): Product {
        return this.storeService.getProduct(sku);
    }

    getProductStock(sku: string): ProductStock {
        return this.storeService.getProductStock(sku);
    }
}