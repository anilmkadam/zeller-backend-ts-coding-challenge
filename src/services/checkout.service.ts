import { StoreController } from "../controllers/store.controller";
import { CartData } from "../models/cart.model";
import { Cart } from "../models/interfaces/cart.interface";
import { Offer } from "../models/offer.model";
import { PricingFactory } from "../utils/factory/pricing_factory";

export class CheckoutService implements Cart {
    private storeController;
    public cart: Map<string, CartData>;
    private offers: Offer;
    constructor(offers: Offer, store: StoreController) {
        this.offers = offers;
        this.cart = new Map();
        this.storeController = store;
    }
    scan(sku: string): void {
        const productData: any = this.storeController.getProduct(sku);
        console.log("SCAN", productData);
        const cartProduct = this.cart.get(sku);
        if (cartProduct) {
            cartProduct.incrCount();
          } else {
            this.cart.set(sku, new CartData(productData));
          }
        this.storeController.removeProduct(sku);
    }

    total(): number {
        let total = 0;
        if(this.cart) {
            this.cart.forEach((cartProduct, sku) => {
                const pricingCalculator = PricingFactory.getInstnace(sku);
                total += pricingCalculator.calculateTotalPrice(cartProduct, sku, this.offers);
            })
        }
        return total;
    }

}