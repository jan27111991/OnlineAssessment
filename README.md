#The tests are included in the e2e/OnlineAssessment/connectors.cy.js folder
#Base URL gets picked up from the cypress config.js folder
#Before block generally gets executes the precondition required for all tests to run 
#Reports can be found in mochaawesome-report folder 
#Command to execute the tests in local 
   => npm run e2e    (Headful mode , report gets generated upon running this)
   => npm run testrun (Open cypress browser, selecting the test case to be executed)
   => npm run headless (Run tests in headless mode and generates report)