import LandingPageObject from './LandingPageObject'
import ProductPageObject from './ProductPageObject'
import CartPageObject from './CartPageObject'
import CustomerPageObject from './CustomerPageObject'

class PageObjectInit {

    getLandingPageObject() {
        let lpObj = new LandingPageObject()
        return lpObj
    }

    getProductPageObject() {
        let ppObj = new ProductPageObject()
        return ppObj
    }

    getCartPageObject() {
        let cpObj = new CartPageObject()
        return cpObj
    }

    getCustomerPageObject() {
        let cusObj = new CustomerPageObject()
        return cusObj
    }

}

export default PageObjectInit