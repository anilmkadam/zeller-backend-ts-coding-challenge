import {describe, expect, test} from '@jest/globals';
import { StoreService } from '../src/services/store.service';
import { Product } from '../src/models/product.model';

const storeService = new StoreService();

describe("Store service specs", () => {
    test("should fetch a product from inventory.", () => {
        const ipadProduct = storeService.getProduct('ipd');

        expect(ipadProduct).not.toBeNull();
        expect(ipadProduct.name).toBe("Super IPad");
    });

    test("should throw error if product is not found in inventory.", () => {
        expect(() => {
            storeService.getProduct('iwtch')
        }).toThrowError("Product stock not found!!");
    });
    
    test("should fetch a product stock from inventory.", () => {
        const ipadProductStock = storeService.getProductStock('ipd');

        expect(ipadProductStock).not.toBeNull();
        expect(ipadProductStock.product).not.toBeNull();
        expect(ipadProductStock.product.name).toBe("Super IPad");
        expect(ipadProductStock.quantity).toBeGreaterThanOrEqual(0);
    });

    test("should add a product in the inventory.", () => {
        const iwatchProduct = new Product('iwtch', 'Super IWatch', 59.99);
        storeService.addProduct(iwatchProduct);

        expect(storeService.getProduct('iwtch')).not.toBeNull();
        expect(storeService.getProductStock('iwtch').quantity).toBeGreaterThan(0);
    });

    test("should update a product in the inventory.", () => {
        const iwatchProduct = new Product('iwtch', 'Super IWatch', 69.99);
        storeService.updaterProductDetails(iwatchProduct);

        expect(storeService.getProduct('iwtch')).not.toBeNull();
        expect(storeService.getProductStock('iwtch').product.price).toBe(69.99);
    });

    test("should remove/decrease quantity of a product from inventory.", () => {
        storeService.removeProductFromInventory('ipd', 9)
        const ipadProductStock = storeService.getProductStock('ipd');

        expect(ipadProductStock).not.toBeNull();
        expect(ipadProductStock.product).not.toBeNull();
        expect(ipadProductStock.product.name).toBe("Super IPad");
        expect(ipadProductStock.quantity).toBe(1);
    });

    test("should remove a product from inventory if quantity exhausted.", () => {
        storeService.removeProductFromInventory('atv', 10)
        expect(() => storeService.getProductStock('atv')).toThrowError("Product not found in inventory!!");
    });
})