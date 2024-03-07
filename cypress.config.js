const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, // Disable web security
  blockThirdPartyCookies: false, // Allow third-party cookies
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

