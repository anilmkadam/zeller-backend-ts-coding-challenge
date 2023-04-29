import { CartData } from "../../models/cart.model";
import { Discount } from "../../models/discount.model";
import { DiscountStrategy } from "../../models/interfaces/discount_strategy.interface";

export class RatioDiscountStrategy implements DiscountStrategy {
    apply(applicableDiscount: Discount, cartProduct: CartData): number {
        return (((Math.floor(cartProduct.count / applicableDiscount.eligibleQuantity)) * applicableDiscount.eligibleQuantity) * applicableDiscount.discountedPrice) 
                + ((cartProduct.count % applicableDiscount.eligibleQuantity) * cartProduct.product.price);
    }

}