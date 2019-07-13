import LandingPageAction from '../../action/LandingPageAction'
import ProductPageAction from '../../action/ProductPageAction'
import CartPageAction from '../../action/CartPageAction';
import CustomerPageAction from '../../action/CustomerPageAction';
/// <reference types="Cypress" />

describe('Test www.bergfreunde.eu website', function () {
  it('Test a flow from search product to checkout and verify login form', function () {
    const lp = new LandingPageAction();
    const pp = new ProductPageAction();
    const cp = new CartPageAction();
    const custp = new CustomerPageAction();

    //Landing Page Events
    //Open website
    lp.visit()
    //Click on Search button
    lp.searchButtonClick()

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    cy.wait(500);
    //Click on Search bar
    lp.searchBarClick()
    //Type 'LUNDHAGS'
    lp.enterSearchString()
    cy.wait(1000)
    //Select first product
    lp.selectFirstElement()
    cy.wait(500);

    //Product Page Events
    //Verify Product title
    pp.verifyProductTitle()
    //Check Ratings
    pp.verifyRating()
    cy.wait(500)
    //Check Product color
    pp.verifyProductColor()
    //Select Size
    pp.selectSize()
    //Check return policy
    pp.verifyReturnPolicy()
    //check product weight
    pp.verifyWeight()
    // compare price and title 
    //from product page and cart page
    pp.verifyPriceandTitle()

    //Cart Page Events
    //Enter NotAvailable voucher
    cp.enterVoucherCode();
    cy.wait(200)
    //Click Redeem button
    cp.clickRedeemButton()
    cy.wait(500)
    //Check Voucher not working
    cp.verifyErrorMessage()
    //Close pop-up
    cp.closeErrorPopup()
    cy.wait(500)
    //Click go to checkout button
    cp.clickCheckoutButton()
    cy.wait(1000)

    //Customer Page Events
    //Verify Email field
    custp.verifyEmailField()
    //Verify Password field
    custp.verifyPasswordField()
    //Verify Login button
    custp.verifyLoginButton()
    //Verify Create a account button
    custp.verifyCreateAccountButton()
  })
})


