const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 90000,
  pageLoadTimeout: 600000,
  env: {
    application: null,
    level: null,
    testingtype: null,
    ALLOW_SCREENSHOT: false,
  },
  viewportWidth: 1200,
  viewportHeight: 800,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  
  reporterOptions: {
    reportdir: 'mochawesome-report',
    overwrite: false,
    html: true,
    json: false,
    charts: true,
    timestamp: 'yyyy_mm_dd_HHMMss',
  },
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.rancher.com',
    testIsolation: false
  },
})
