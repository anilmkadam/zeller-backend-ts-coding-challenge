import { Discount } from "./discount.model";

export class Offer {
    activeOffers: Map<string, Discount> = new Map();

    addOffer(sku: string, discount: Discount) {
        this.activeOffers.set(sku, discount)
    }
}