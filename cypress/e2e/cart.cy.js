const { faker } = require('@faker-js/faker');

const randomcartId = faker.string.uuid()
const randomshopperId= faker.string.uuid()
const randomshopperEmail = faker.internet.email()

describe('Cart API Tests', () => {

  it('should return 401 for invalid authentication parameters', () => {
    cy.request({
      method :'POST', 
      url:'https://api.luckycart.com/cart/ticket', 
      body: {
      "cartId": randomcartId,
      "totalAti": 55.00,
      "shopperId": randomshopperId,
      "shopperEmail": randomshopperEmail,
      "auth_v": "wrong_auth_v",
      "auth_key": "wrong_auth_key",
      "auth_ts": "wrong_auth_ts",
      "auth_sign": "wrong_auth_sign"
    },
    failOnStatusCode: false
  }
    )
      .then((response) => {
        expect(response.status).to.eq(401);
      });
  });

  it('should return 200 for totalAti < 50 without game', () => {
    cy.request('POST', 'https://api.luckycart.com/cart/ticket', 
    {
      "cartId": randomcartId,
      "totalAti": 49,
      "shopperId": randomshopperId,
      "shopperEmail": randomshopperEmail,
      "auth_v": "2.0",
      "auth_key": "tVIoa1S6",
      "auth_ts": "1640991600",
      "auth_sign": "c723c649c389d68d8ab3feb4f53875f7f7eb87d27ec575f1f06a66e3dae4dc30"
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('should return 200 for totalAti > 50 with game', () => {
    cy.request('POST', 'https://api.luckycart.com/cart/ticket', 
    {
      "cartId": faker.string.uuid(),
      "totalAti": 55.00,
      "shopperId": faker.string.uuid(),
      "shopperEmail": faker.internet.email(),
      "auth_v": "2.0",
      "auth_key": "tVIoa1S6",
      "auth_ts": "1640991600",
      "auth_sign": "c723c649c389d68d8ab3feb4f53875f7f7eb87d27ec575f1f06a66e3dae4dc30"
    })
      .then((response) => {
        cy.log('Response:', response);
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('baseMobileUrl');
        const baseMobileUrl = response.body.baseMobileUrl;
        cy.log('value base url:', baseMobileUrl);
        cy.visit(response.body.baseMobileUrl);
        cy.wait(2000);

        cy.get('.lc-iframe').then(($iframe) => {
          const $body = $iframe.contents().find('body');
          cy.wrap($body).find('.sc-bczRLJ').click();
          cy.wrap($body).contains('Congrats, you won nothing!', { timeout: 20000 } )
        });
      });
  });
});
