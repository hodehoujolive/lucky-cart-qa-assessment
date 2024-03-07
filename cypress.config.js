const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, // Disable web security
  blockThirdPartyCookies: false, // Allow third-party cookies
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  env: {
    api_endpoint : "api_endpoint",
    auth_key: "auth_key",
    auth_ts: "auth_ts",
    auth_sign: "auth_sign"
    }
  },
});

