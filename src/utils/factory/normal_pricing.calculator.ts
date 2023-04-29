import { CartData } from "../../models/cart.model";
import { PricingHandler } from "../../models/interfaces/pricing_handler.interface";

export class NormalPricingCalculator implements PricingHandler {
    calculateTotalPrice(cartProduct: CartData, sku: string): number {
        return cartProduct.count * cartProduct.product.price;
    }

}