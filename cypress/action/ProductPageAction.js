import PageObjectInit from '../pageObject/PageObjectInit.js'

class ProductPageAction {

    constructor() {
        this.pageObjectInit = new PageObjectInit()
    }

    verifyRating() {
        cy.get(this.pageObjectInit.getProductPageObject().ratingElement).should('be.visible')
        cy.log('Checked Rating for Product')
        console.log('Checked Rating for Product')
    }

    verifyProductColor() {
        cy.get(this.pageObjectInit.getProductPageObject().colorElement).contains('Black')
        cy.log('Checked Product color')
        console.log('Checked Product color')
    }

    selectSize() {
        cy.get(this.pageObjectInit.getProductPageObject().sizeElement).click();
        cy.log('Selected size')
        console.log('Selected size')
    }

    verifyReturnPolicy() {
        cy.get(this.pageObjectInit.getProductPageObject().policyElement).should(($lis) => {
            expect($lis.eq(2)).to.contain('30 days returns policy')
        })
        cy.log('Verified return policy')
        console.log('Verified return policy')
    }

    verifyProductTitle() {
        cy.get(this.pageObjectInit.getProductPageObject().titleElement).as("title")
        cy.get("@title").should('contain', 'Authentic Pro Pant - Walking trousers')
        cy.log('Verified product title')
        console.log('Verified product title')
    }

    verifyWeight() {
        cy.get(this.pageObjectInit.getProductPageObject().weightElement).should('be.visible')
        cy.log('Checked product weight')
        console.log('Checked product weight')
    }

    getProductPrice() {
        cy.get(this.pageObjectInit.getProductPageObject().priceElement).then(($span) => {
            const priceText = $span.text()
            return priceText
        })
        cy.log('Got product price')
        console.log('Got product price')
    }

    getProductTitle() {
        cy.get(this.pageObjectInit.getProductPageObject().titleElement).then(($titles) => {
            const titleText = $titles.text()
            return titleText
        })
        cy.log('Got product title')
        console.log('Got product title')
    }

    clickAddToCart() {
        cy.get(this.pageObjectInit.getProductPageObject().btnAddToCart).click()
        cy.log('Added to cart')
        console.log('Added to cart')
    }

    clickBackToProduct() {
        cy.get(this.pageObjectInit.getProductPageObject().btnBackToProduct).click()
        cy.log('Clicked back to product')
        console.log('Clicked back to product')
    }

    clickGoTOCart() {
        cy.get(this.pageObjectInit.getProductPageObject().btnGoToCart).click()
        cy.log('Clicked Go to cart')
        console.log('Clicked Go to cart')
    }

    verifyPriceandTitle() {
        cy.get(this.pageObjectInit.getProductPageObject().titleElement).then(($titles) => {
            const titleText = $titles.text()
            cy.log('Got product title')
            console.log('Got product title')

            cy.get(this.pageObjectInit.getProductPageObject().priceElement).then(($span) => {
                const priceText = $span.text()
                cy.log('Got product price')
                console.log('Got product price')
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
                    cy.log('Got cart price')
                    console.log('Got cart price')
                    const new_Amount = amount.replace(',', '.')
                    const final_price = new_Amount.split(" ")
                    if (final_price[1] == (priceText * 2)){
                        cy.log("Price matches")
                        console.log('Price matches')
                    }
                    else{
                        cy.log("Price does not match")
                        console.log("Price does not match")
                    }

                    cy.get(this.pageObjectInit.getCartPageObject().cartProductTitle).should('contain', titleText)
                    cy.log('Compared titles')
                    console.log('Compared titles')
                })
            })
        })
    }
}


export default ProductPageAction