import { Offer } from "../models/offer.model";
import { CheckoutService } from "../services/checkout.service";
import { StoreController } from "./store.controller";

export class CheckoutController {
    private checkoutService;
    private storeController = new StoreController();
    constructor(offer: Offer) {
        this.checkoutService = new CheckoutService(offer, this.storeController);
    }
    scan(sku: string): void {
        this.checkoutService.scan(sku);
    }
    total(): number {
        return this.checkoutService.total();
    }
    
}