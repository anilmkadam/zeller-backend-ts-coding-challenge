
import { Product } from "./product.model";
import { ProductStock } from "./product_stock.model";

export class Inventory {
    products: Map<string, ProductStock> = new Map();

    addProduct(product: Product, quantity = 1) {
        if(this.products.has(product.sku)) {
            const existingProduct = this.products.get(product.sku);
            existingProduct.quantity += quantity;
            return;
        }
        const productStock = new ProductStock(product, quantity);
        this.products.set(product.sku, productStock);
    }

    removeProduct(sku: string, quantity = 1) {
        const existingProduct = this.products.get(sku);
        if(!existingProduct) {
            throw new Error("Product doesn't exists");
        }
        existingProduct.quantity -= quantity;
        if(existingProduct.quantity <= 0) {
            this.products.delete(sku);
        }
    }

    updateProductQuantity(sku: string, quantity = 1) {
        const existingProduct = this.products.get(sku);
        if(!existingProduct) {
            throw new Error("Product doesn't exists");
        }
        existingProduct.quantity += quantity;
    }
    updateProduct(product: Product) {
        const existingProduct = this.products.get(product.sku);
        if(!existingProduct) {
            throw new Error("Product doesn't exists");
        }
        existingProduct.product = product;
    }
    getProduct(sku: string) {
        return this.products.get(sku);
    }
}