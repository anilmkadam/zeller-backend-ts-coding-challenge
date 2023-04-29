import { CartData } from "../cart.model";
import { Discount } from "../discount.model";

export interface DiscountStrategy {
    apply(applicableDiscount: Discount, cartProduct: CartData): number;
}