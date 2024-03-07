class CartPage {

    visitCartPage(url) {
      cy.visit(url);
    }
  
    getIFrame() {
      return cy.get('.lc-iframe');
    }
  
    clickButtonInIFrame() {
      this.getIFrame().then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('.sc-bczRLJ').click();
      });
    }
  
    waitForCongratsMessage() {
        this.getIFrame().then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).contains('Congrats', { timeout: 20000 } )
          });
    }

    waitForLostMessage() {
        this.getIFrame().then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).contains('Sorry', { timeout: 20000 } )
          });
    }

    waitForErrorMessage() {
        this.getIFrame().then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).contains('Oops', { timeout: 20000 } )
          });
    }

  }
  
  export default CartPage;
  