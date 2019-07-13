import PageObjectInit from '../pageObject/PageObjectInit.js'

class CustomerPageAction {

    constructor() {
        this.pageObjectInit = new PageObjectInit()
    }

    verifyEmailField() {
        cy.get(this.pageObjectInit.getCustomerPageObject().inputEmail).should('be.visible')
        cy.task('log', 'Checked Email edit box')
    }

    verifyPasswordField() {
        cy.get(this.pageObjectInit.getCustomerPageObject().inputPassword).should('be.visible')
        cy.task('log', 'Checked Password edit box')
    }

    verifyLoginButton() {
        cy.get(this.pageObjectInit.getCustomerPageObject().btnLogin).should('be.visible')
        cy.task('log', 'Checked Login button')
    }

    verifyCreateAccountButton() {
        cy.get(this.pageObjectInit.getCustomerPageObject().btnCreateAccount).should('be.visible')
        cy.task('log', 'Checked Create account button')
    }
}

export default CustomerPageAction