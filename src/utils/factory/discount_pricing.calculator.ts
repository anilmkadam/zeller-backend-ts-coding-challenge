import { CartData } from "../../models/cart.model";
import { PricingHandler } from "../../models/interfaces/pricing_handler.interface";
import { Offer } from "../../models/offer.model";
import { DiscountHandler } from "../strategy/discount_handler";
import { NormalPricingCalculator } from "./normal_pricing.calculator";

export class DiscountPricingCalculator implements PricingHandler {
    calculateTotalPrice(cartProduct: CartData, sku: string, offers?: Offer): number {
        let total = 0;
        const existingOffer = offers.activeOffers.get(sku);
        if(existingOffer && cartProduct.count >= existingOffer.eligibleQuantity) {
            const discountHandler = new DiscountHandler();
            return discountHandler.calculateTotal(existingOffer, cartProduct);
        }
        return new NormalPricingCalculator().calculateTotalPrice(cartProduct, sku);
    }

}