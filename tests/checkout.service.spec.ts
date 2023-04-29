import {describe, expect, test, beforeEach} from '@jest/globals';
import {CheckoutService} from '../src/services/checkout.service'
import { Offer } from '../src/models/offer.model';
import { Discount } from '../src/models/discount.model';
import { StoreController } from '../src/controllers/store.controller';

let checkoutService: CheckoutService;
let storeController: StoreController;

beforeEach(() => {
    const offers = new Offer();
    offers.addOffer("ipd", new Discount("ipd", 4, 499.99, true, false));
    offers.addOffer("atv", new Discount("atv", 3, 73, false, true));
    storeController = new StoreController();
    checkoutService = new CheckoutService(offers, storeController);
})

describe("Checkout Service Specs.", () => {
    test("should successfully scan the sku", () => {
        checkoutService.scan('atv');
        checkoutService.scan('ipd');

        expect(checkoutService.cart.size).toBe(2);
    });

    test("should successfully scan the sku and return the bulk count.", () => {
        [1,2,3,4].forEach((n) => checkoutService.scan('ipd'));

        expect(checkoutService.cart.get('ipd')?.count).toBe(4);
    });

    test("should successfully scan the sku and should update inventory count.", () => {
        [1,2,3,4].forEach((n) => checkoutService.scan('ipd'));

        expect(checkoutService.cart.get('ipd')?.count).toBe(4);
        expect(storeController.getProductStock('ipd').quantity).toBe(6);
    });

    test("should return total cart price.", () => {
        checkoutService.scan('atv');
        checkoutService.scan('ipd');

        expect(checkoutService.cart.size).toBe(2);
        expect(checkoutService.total()).toBe(659.49)
    });

    test("should apply bulk discount and return total cart price.", () => {
        [1,2,3,4].forEach((n) => checkoutService.scan('ipd'));

        expect(checkoutService.cart.size).toBe(1);
        expect(checkoutService.cart.get('ipd')?.count).toBe(4);
        expect(checkoutService.total()).toBe(1999.96)
    });

    test("should apply ratio discount and return total cart price.", () => {
        checkoutService.scan("atv");
        checkoutService.scan("atv");
        checkoutService.scan("atv");
        checkoutService.scan("vga");

        expect(checkoutService.cart.size).toBe(2);
        expect(checkoutService.cart.get('atv')?.count).toBe(3);
        expect(checkoutService.total()).toBe(249.00)
    });

    test("should apply bulk discount on variety of cart product and return total cart price.", () => {
        checkoutService.scan("atv");
        checkoutService.scan("ipd");
        checkoutService.scan("ipd");
        checkoutService.scan("atv");
        checkoutService.scan("ipd");
        checkoutService.scan("ipd");
        checkoutService.scan("ipd");

        expect(checkoutService.cart.size).toBe(2);
        expect(checkoutService.cart.get('ipd')?.count).toBe(5);
        expect(checkoutService.total()).toBe(2718.95)
    });
})