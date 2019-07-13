import PageObjectInit from '../pageObject/PageObjectInit.js'

class LandingPageAction {
    constructor() {
        this.pageObjectInit = new PageObjectInit()
    }

    visit() {
        cy.visit('https://www.bergfreunde.eu/')
        cy.log('Visited the web-site')
        console.log('Visited the web-site')
    }

    searchButtonClick() {
        cy.get(this.pageObjectInit.getLandingPageObject().btnSearchBox).click()
        cy.log('Clicked on search buttom')
        console.log('Clicked on search buttom')
    }

    searchBarClick() {
        cy.get(this.pageObjectInit.getLandingPageObject().searchBar).click()
        cy.log('Clicked on search bar')
        console.log('Clicked on search bar')
    }

    enterSearchString() {
        cy.get(this.pageObjectInit.getLandingPageObject().searchBar).type('LUNDHAGS')
        cy.log('Entered String LUNDHAGS')
        console.log('Entered String LUNDHAGS')
    }

    selectFirstElement() {
        cy.get(this.pageObjectInit.getLandingPageObject().firstElement).click()
        cy.log('Selected first product')
        console.log('Selected first product')
    }
}

export default LandingPageAction