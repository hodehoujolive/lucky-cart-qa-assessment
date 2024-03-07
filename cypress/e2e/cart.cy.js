const { faker } = require('@faker-js/faker');
import CartPage from '../pages/cartPage';

const cartPage = new CartPage();

const api_Endpoint = Cypress.env('api_endpoint');
const authKey = Cypress.env('auth_key');
const authTs = Cypress.env('auth_ts');
const authSign = Cypress.env('auth_sign');

// Use authKey, authTs, and authSign in your request body

describe('Cart API Tests', () => {

  it('should return 401 for invalid authentication parameters', () => {
    cy.request({
      method :'POST', 
      url: api_Endpoint, 
      body: {
      "cartId": faker.string.uuid(),
      "totalAti": 50.00,
      "shopperId": faker.string.uuid(),
      "shopperEmail": faker.internet.email(),
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
    cy.request('POST', api_Endpoint, 
    {
      "cartId": faker.string.uuid(),
      "totalAti": 49,
      "shopperId": faker.string.uuid(),
      "shopperEmail": faker.internet.email(),
      "auth_v": "2.0",
      "auth_key": authKey,
      "auth_ts": authTs,
      "auth_sign": authSign
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('should return 200 for totalAti > 50 with game', () => {
    cy.request('POST', api_Endpoint, 
    {
      "cartId": faker.string.uuid(),
      "totalAti": 55.00,
      "shopperId": faker.string.uuid(),
      "shopperEmail": faker.internet.email(),
      "auth_v": "2.0",
      "auth_key": authKey,
      "auth_ts": authTs,
      "auth_sign": authSign
    })
      .then((response) => {

        cy.log('Response:', response);

        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('baseMobileUrl');

        const baseMobileUrl = response.body.baseMobileUrl;
        cy.log('value base url:', baseMobileUrl);

        cartPage.visitCartPage(baseMobileUrl);
        cy.wait(4000);

        cartPage.clickButtonInIFrame();
        cartPage.waitForCongratsMessage();

      });
  });
});
