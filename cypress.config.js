const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, // Disable web security
  blockThirdPartyCookies: false, // Allow third-party cookies
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  env: {
    api_endpoint : "https://api.luckycart.com/cart/ticket",
    auth_key: "tVIoa1S6",
    auth_ts: "1640991600",
    auth_sign: "c723c649c389d68d8ab3feb4f53875f7f7eb87d27ec575f1f06a66e3dae4dc30"
    }
  },
});

