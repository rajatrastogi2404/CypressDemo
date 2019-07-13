import PageObjectInit from '../pageObject/PageObjectInit.js'

class CustomerPageAction {

    constructor() {
        this.pageObjectInit = new PageObjectInit()
    }

    verifyEmailField() {
        cy.get(this.pageObjectInit.getCustomerPageObject().inputEmail).should('be.visible')
        cy.log('Checked Email edit box')
        console.log('Checked Email edit box')
    }

    verifyPasswordField() {
        cy.get(this.pageObjectInit.getCustomerPageObject().inputPassword).should('be.visible')
        cy.log('Checked Password edit box')
        console.log('Checked Password edit box')
    }

    verifyLoginButton() {
        cy.get(this.pageObjectInit.getCustomerPageObject().btnLogin).should('be.visible')
        cy.log('Checked Login button')
        console.log('Checked Login button')
    }

    verifyCreateAccountButton() {
        cy.get(this.pageObjectInit.getCustomerPageObject().btnCreateAccount).should('be.visible')
        cy.log('Checked Create account button')
        console.log('Checked Create account button')
    }
}

export default CustomerPageAction