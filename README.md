## Overview
[Video Record](https://drive.google.com/file/d/1uSeK6CHmhkjgd92284aWQQGee_3Hh8C-/view?usp=sharing)

- The automated tests are designed to validate different scenarios within the gaming experience, covering both the functionality of the Cart API and the gameplay through the web interface.
- Scenario 1 tests the Cart API's response when the total amount (inclusive of tax) is below $50, ensuring it returns a successful 200 status.
- Scenario 2 tests the Cart API's response when the total amount exceeds $50 and includes game information, also expecting a successful 200 status.
- Scenario 3 focuses on the web game experience, simulating user interactions such as navigating to the game page, initiating gameplay, and validating a successful game win message
- By encompassing these scenarios, the test suite aims to ensure the reliability and functionality of the new gaming experience across different components and interactions.
- TODO : [ ] Add cucumber preprocessor to the test suite


## Installation

```bash
## install all dependencies from the root directory
npm install
```
## Configuration
Before running the tests, you need to configure authentication variables in the ```cypress.config.js``` file.
1. Open cypress.config.js file located in the root of the project.
2. Find the following lines:
3. Replace the empty strings "" with your authentication credentials.

```bash
env: {
    auth_key: "",
    auth_ts: "",
    auth_sign: ""
}
```

## Opening Cypress App

```bash
cd lucky-cart-qa-assessment/
# open Cypress App
npm run cypress:open
```

## Running from the CLI

Same as running Cypress GUI but with `cypress run` command (and any CLI arguments)

```bash
cd lucky-cart-qa-assessment/
# run Cypress tests headlessly
npx cypress run 

### runs all example projects in specific browser
### similar to cypress run --browser <name>
npx cypress run -- --browser chrome

### sends test results, videos, screenshots
### to Cypress dashboard
npm run cypress:run -- --record
```


## Ressources

Concept | Description
--- | ---
[POM](https://www.lambdatest.com/learning-hub/cypress-page-object-model) | How to Implement Cypress Page Object Model (POM)
[Iframe](https://www.lambdatest.com/blog/how-to-handle-iframes-in-cypress/) | How To Handle iFrames In Cypress
[failOnStatusCode](https://docs.cypress.io/api/commands/visit#Arguments) | Whether to fail on response codes other than 2xx and 3xx
[visit](https://docs.cypress.io/api/commands/visit#__docusaurus_skipToContent_fallback) | Visit a remote URL
[Wrap](https://docs.cypress.io/api/commands/wrap#__docusaurus_skipToContent_fallback) | Yield the object passed into .wrap(). If the object is a promise, yield its resolved value.
[Then](https://docs.cypress.io/api/commands/then) | Enables you to work with the subject yielded from the previous command.
[Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor) | Example usage of Cypress with Cucumber
