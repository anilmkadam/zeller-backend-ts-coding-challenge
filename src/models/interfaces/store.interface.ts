import { Product } from "../product.model";
import { ProductStock } from "../product_stock.model";

export interface Store {
    addProduct(product: Product, quantity?: number);

    getProduct(sku: string): Product;

    updaterProductDetails(product: Product);

    removeProductFromInventory(sku: string, quantity?: number);

    getProductStock(sku: string): ProductStock;
}