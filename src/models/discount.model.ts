export class Discount {
    sku: string;
    eligibleQuantity: number;
    discountedPrice: number;
    isBulkDiscount = false;
    isRatioDiscount = false;
    constructor(sku: string, quantity: number, price: number, isBulkDiscount: boolean, isRatioDiscount: boolean) {
        this.sku = sku;
        this.eligibleQuantity = quantity;
        this.discountedPrice = price;
        this.isBulkDiscount = isBulkDiscount;
        this.isRatioDiscount = isRatioDiscount;
    }
}