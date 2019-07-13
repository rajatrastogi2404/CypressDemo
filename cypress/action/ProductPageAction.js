import PageObjectInit from '../pageObject/PageObjectInit.js'

class ProductPageAction {

    constructor() {
        this.pageObjectInit = new PageObjectInit()
    }

    verifyRating() {
        cy.get(this.pageObjectInit.getProductPageObject().ratingElement).should('be.visible')
        cy.task('log', 'Checked Rating for Product')
    }

    verifyProductColor() {
        cy.get(this.pageObjectInit.getProductPageObject().colorElement).contains('Black')
        cy.task('log', 'Checked Product color')
    }

    selectSize() {
        cy.get(this.pageObjectInit.getProductPageObject().sizeElement).click();
        cy.task('log', 'Selected size')
    }

    verifyReturnPolicy() {
        cy.get(this.pageObjectInit.getProductPageObject().policyElement).should(($lis) => {
            expect($lis.eq(2)).to.contain('30 days returns policy')
        })
        cy.task('log', 'Verified return policy')
    }

    verifyProductTitle() {
        cy.get(this.pageObjectInit.getProductPageObject().titleElement).as("title")
        cy.get("@title").should('contain', 'Authentic Pro Pant - Walking trousers')
        cy.task('log', 'Verified product title')
    }

    verifyWeight() {
        cy.get(this.pageObjectInit.getProductPageObject().weightElement).should('be.visible')
        cy.task('log', 'Checked product weight')
    }

    getProductPrice() {
        cy.get(this.pageObjectInit.getProductPageObject().priceElement).then(($span) => {
            const priceText = $span.text()
            return priceText
        })
        cy.task('log', 'Got product price')
    }

    getProductTitle() {
        cy.get(this.pageObjectInit.getProductPageObject().titleElement).then(($titles) => {
            const titleText = $titles.text()
            return titleText
        })
        cy.task('log', 'Got product title')
    }

    clickAddToCart() {
        cy.get(this.pageObjectInit.getProductPageObject().btnAddToCart).click()
        cy.task('log', 'Added to cart')
    }

    clickBackToProduct() {
        cy.get(this.pageObjectInit.getProductPageObject().btnBackToProduct).click()
        cy.task('log', 'Clicked back to product')
    }

    clickGoTOCart() {
        cy.get(this.pageObjectInit.getProductPageObject().btnGoToCart).click()
        cy.task('log', 'Clicked Go to cart')
    }

    verifyPriceandTitle() {
        cy.get(this.pageObjectInit.getProductPageObject().titleElement).then(($titles) => {
            const titleText = $titles.text()
            cy.task('log', 'Got product title')

            cy.get(this.pageObjectInit.getProductPageObject().priceElement).then(($span) => {
                const priceText = $span.text()
                cy.task('log', 'Got product price')
                this.clickAddToCart()
                cy.wait(500)
                this.clickBackToProduct()
                cy.wait(500)
                this.clickAddToCart()
                cy.wait(500)
                this.clickGoTOCart()
                cy.wait(500)

                cy.get(this.pageObjectInit.getCartPageObject().cartPriceElement).then(($price) => {
                    const amount = $price.text()
                    cy.task('log', 'Got cart price')
                    const new_Amount = amount.replace(',', '.')
                    const final_price = new_Amount.split(" ")
                    if (final_price[1] == (priceText * 2)) {
                        cy.task('log', 'Price matches')
                    }
                    else {
                        cy.task('log', "Price does not match")
                    }

                    cy.get(this.pageObjectInit.getCartPageObject().cartProductTitle).should('contain', titleText)
                    cy.task('log', 'Compared titles')
                })
            })
        })
    }
}


export default ProductPageAction