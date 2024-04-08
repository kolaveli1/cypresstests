const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 410,
  viewportHeight: 930,
  deviceScaleFactor: 3,

  e2e: {
    watchForFileChanges: false, 
    setupNodeEvents(on, config) {
      
    },
  },
});
