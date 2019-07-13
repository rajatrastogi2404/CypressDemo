import PageObjectInit from '../pageObject/PageObjectInit'

class CartPageAction {

    constructor() {
        this.pageObjectInit = new PageObjectInit()
    }

    enterVoucherCode() {
        cy.get(this.pageObjectInit.getCartPageObject().inputVoucher).type('NotAvailable')
        cy.log('Entered voucher code')
        console.log('Entered voucher code')
    }

    clickRedeemButton() {
        cy.get(this.pageObjectInit.getCartPageObject().btnRedeem).click()
        cy.log('Clicked Redeem button')
        console.log('Clicked Redeem button')
    }

    verifyErrorMessage() {
        cy.get(this.pageObjectInit.getCartPageObject().errMsgElement).should('contain', 'Reason: This voucher is not valid!')
        cy.log('Verified Voucher Error Message')
        console.log('Verified Voucher Error Message')
    }

    closeErrorPopup() {
        cy.get(this.pageObjectInit.getCartPageObject().errClose).click()
        cy.log('Closed Error pop-up')
        console.log('Closed Error pop-up')
    }

    clickCheckoutButton() {
        cy.get(this.pageObjectInit.getCartPageObject().btnGotoCheckout).click()
        cy.log('Clicked Go to Checkout button')
        console.log('Clicked Go to Checkout button')
    }

    getCartPrice() {
        cy.get(this.pageObjectInit.getCartPageObject().cartPriceElement).then(($price) => {
            const amount = $price.text()
            cy.log('Got cart price')
            console.log('Got cart price')
            const new_Amount = amount.replace(',', '.')
            const final_price = new_Amount.split(" ")
            return final_price[1]
        })
    }
}


export default CartPageAction