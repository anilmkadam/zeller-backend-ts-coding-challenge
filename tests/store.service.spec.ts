import {describe, expect, test} from '@jest/globals';
import { StoreService } from '../src/services/store.service';

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
    
})