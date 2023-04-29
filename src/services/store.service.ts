import { InMemoryStore } from "../adapters/in_memory_store.adapter";
import { Adapter } from "../models/interfaces/adapter.interface";
import { Store } from "../models/interfaces/store.interface";
import { Product } from "../models/product.model";
import { ProductStock } from "../models/product_stock.model";

export class StoreService implements Store {
    private storeAdapter: Adapter;
    constructor() {
        this.storeAdapter = new InMemoryStore();
    }
    getProductStock(sku: string): ProductStock {
        const inventory = this.storeAdapter.getInventory();
        return inventory.getProduct(sku);
    }

    addProduct(product: Product, quantity?: number) {
        this.storeAdapter.addProductInventory(product, quantity);
    }

    getProduct(sku: string): Product {
        const productStockDetails = this.storeAdapter.getProductAndStock(sku);
        return productStockDetails.product;
    }

    updaterProductDetails(product: Product) {
        this.storeAdapter.updateProductInventory(product);
    }

    removeProductFromInventory(sku: string, quantity?: number) {
        this.storeAdapter.removeProductInventory(sku, quantity);
    }
    
}