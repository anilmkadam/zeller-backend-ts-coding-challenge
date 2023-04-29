import { Inventory } from "../inventory.model";
import { Product } from "../product.model";
import { ProductStock } from "../product_stock.model";

export interface Adapter {
    addProductInventory(product: Product, quantity?: number);
    getInventory(): Inventory;
    assignProductInventory(inventory: Inventory);
    getProductAndStock(sku: string): ProductStock;
    updateProductInventory(product: Product);
    removeProductInventory(sku: string, quantity?: number);
}