class CartPageObject {

    cartPriceElement = '.totalprice'
    inputVoucher = 'input[name=voucherNr]'
    errMsgElement = '.voucher-errors > :nth-child(2)'
    errClose = '#error-modal .close'
    btnRedeem = 'button[title=Redeem]'
    btnGotoCheckout = ':nth-child(1) > .checkout--bar > .clearfix-small > .a-button'
    cartProductTitle = '.product--title'
}

export default CartPageObject