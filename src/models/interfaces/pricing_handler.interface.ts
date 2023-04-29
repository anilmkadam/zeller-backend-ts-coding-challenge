import { CartData } from "../cart.model";
import { Offer } from "../offer.model";

export interface PricingHandler {
    calculateTotalPrice(cart: CartData, sku: string, offer?: Offer);
}