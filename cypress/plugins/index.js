/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
//  const { preprocessTypescript } = require('@nrwl/cypress/plugins/preprocessor');
 const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
 

  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
 module.exports = (on, config) => {
  
   // we register our plugin using its register method:
   addMatchImageSnapshotPlugin(on, config);

  //  on('file:preprocessor', preprocessTypescript(config));
 
   // force color profile
   on('before:browser:launch', (browser = {}, launchOptions) => {
     if (browser.family === 'chromium' && browser.name !== 'electron') {
       launchOptions.args.push('--force-color-profile=srgb');
     }
   });

 
}
  