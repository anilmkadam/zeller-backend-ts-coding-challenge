import { Adapter } from "../models/interfaces/adapter.interface";
import { Inventory } from "../models/inventory.model";
import { Product } from "../models/product.model";
import { ProductStock } from "../models/product_stock.model";

export class InMemoryStore implements Adapter {
    storeInventory: Inventory = new Inventory();
    constructor() {
        this.initStore();
    }
    private initStore() {
        const productData: Product[] = [
            {
                sku: "ipd",
                name: "Super IPad",
                price: 549.99
            },
            {
                sku: "mbp",
                name: "Mackbook Pro",
                price: 1399.99
            },
            {
                sku: "atv",
                name: "Apple TV",
                price: 109.50
            },
            {
                sku: "vga",
                name: "VGA Adapter",
                price: 30
            }
        ];
        
        productData.forEach(product => {
            this.storeInventory.addProduct(product, 10);
        });
    }
    
    addProductInventory(product: Product, quantity = 1) {
        this.storeInventory.addProduct(product, quantity);
    }
    getInventory(): Inventory {
        return this.storeInventory;
    }
    assignProductInventory(inventory: Inventory) {
        this.storeInventory = inventory;
    }
    getProductAndStock(sku: string): ProductStock {
        const productStock = this.storeInventory.getProduct(sku);
        if(!productStock) {
            throw new Error("Product stock not found!!");
        }
        console.log("STOCK", productStock);
        return productStock;
    }
    updateProductInventory(product: Product) {
        this.storeInventory.updateProduct(product);
    }
    removeProductInventory(sku: string, quantity?: number) {
        this.storeInventory.removeProduct(sku, quantity);
    }
}