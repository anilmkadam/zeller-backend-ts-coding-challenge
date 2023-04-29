import { CartData } from "../../models/cart.model";
import { Discount } from "../../models/discount.model";
import { DiscountStrategy } from "../../models/interfaces/discount_strategy.interface";

export class BulkDiscountStrategy implements DiscountStrategy {
    apply(applicableDiscount: Discount, cartProduct: CartData): number {
        return ((cartProduct.count) * applicableDiscount.discountedPrice);;
    }

}