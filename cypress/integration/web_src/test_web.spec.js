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

    lp.visit()
    lp.searchButtonClick()

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    cy.wait(500);
    lp.searchBarClick()
    lp.enterSearchString()
    cy.wait(1000)
    lp.selectFirstElement()
    cy.wait(500);
    pp.verifyProductTitle()
    pp.verifyRating()
    cy.wait(500)
    pp.verifyProductColor()
    pp.selectSize()
    pp.verifyReturnPolicy()
    pp.verifyWeight()
    pp.verifyPriceandTitle()
    cp.enterVoucherCode();
    cy.wait(200)
    cp.clickRedeemButton()
    cy.wait(500)
    cp.verifyErrorMessage()
    cp.closeErrorPopup()
    cy.wait(500)
    cp.clickCheckoutButton()
    cy.wait(1000)
    custp.verifyEmailField()
    custp.verifyPasswordField()
    custp.verifyLoginButton()
    custp.verifyCreateAccountButton()
  })
})


