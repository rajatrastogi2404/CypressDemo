import PageObjectInit from '../pageObject/PageObjectInit.js'

class LandingPageAction {
  constructor() {
    this.pageObjectInit = new PageObjectInit()
  }

  visit() {
    cy.visit('https://www.bergfreunde.eu/')
    cy.task('log', 'Visited the web-site')
  }

  searchButtonClick() {
    cy.get(this.pageObjectInit.getLandingPageObject().btnSearchBox).click()
    cy.task('log', 'Clicked on search buttom')
  }

  searchBarClick() {
    cy.get(this.pageObjectInit.getLandingPageObject().searchBar).click()
    cy.task('log', 'Clicked on search bar')
  }

  enterSearchString() {
    cy.get(this.pageObjectInit.getLandingPageObject().searchBar).type('LUNDHAGS')
    cy.task('log', 'Entered String LUNDHAGS')
  }

  selectFirstElement() {
    cy.get(this.pageObjectInit.getLandingPageObject().firstElement).click()
    cy.task('log', 'Selected first product')
  }
}

export default LandingPageAction