import { PricingHandler } from "../../models/interfaces/pricing_handler.interface";
import { DiscountPricingCalculator } from "./discount_pricing.calculator";
import { NormalPricingCalculator } from "./normal_pricing.calculator";

const DiscountedProdcut = ["ipd", "atv"];

export class PricingFactory {
    static getInstnace(sku: string): PricingHandler {
        if(DiscountedProdcut.includes(sku))
            return new DiscountPricingCalculator();
        return new NormalPricingCalculator();
    }
}