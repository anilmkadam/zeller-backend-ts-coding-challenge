import { CheckoutController } from "./controllers/checkout.controller";
import { StoreController } from "./controllers/store.controller";
import { Discount } from "./models/discount.model";
import { Offer } from "./models/offer.model";


const offers = new Offer();
offers.addOffer("ipd", new Discount("ipd", 4, 499.99, true, false));
offers.addOffer("atv", new Discount("atv", 3, 73, false, true));

const storeController = new StoreController();
const checkoutController = new CheckoutController(offers);

// checkoutController.scan("atv");
// checkoutController.scan("ipd");
// checkoutController.scan("ipd");
// checkoutController.scan("atv");
// checkoutController.scan("ipd");
// checkoutController.scan("ipd");
// checkoutController.scan("ipd");

checkoutController.scan("atv");
checkoutController.scan("atv");
checkoutController.scan("atv");
checkoutController.scan("atv");
checkoutController.scan("atv");
checkoutController.scan("atv");
checkoutController.scan("atv");
// checkoutController.scan("vga");

console.log(checkoutController.total());
