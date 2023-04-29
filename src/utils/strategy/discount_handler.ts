import { CartData } from "../../models/cart.model";
import { Discount } from "../../models/discount.model";
import { DiscountStrategy } from "../../models/interfaces/discount_strategy.interface";
import { Product } from "../../models/product.model";
import { BulkDiscountStrategy } from "./bulk_discount.strategy";
import { RatioDiscountStrategy } from "./ratio_discount.strategy";

export class DiscountHandler {
    private discountStrategyInstance: DiscountStrategy;

    private setInstance(applicableDiscount: Discount) {
        if(applicableDiscount.isBulkDiscount) 
            this.discountStrategyInstance = new BulkDiscountStrategy();
        if(applicableDiscount.isRatioDiscount)
            this.discountStrategyInstance = new RatioDiscountStrategy();
    }

    calculateTotal(applicableDiscount: Discount, cartProduct: CartData): number {
        this.setInstance(applicableDiscount);
        return this.discountStrategyInstance.apply(applicableDiscount, cartProduct);
    }
}