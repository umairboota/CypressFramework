const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    // screenshotsFolder: "cypress/screenshots",
    // videosFolder: "cypress/videos",
    // video: true,
    setupNodeEvents(on, config) {
      // Example event listener
      on('before:run', () => {
        console.log('Before running tests');
      });
      return config;
    },
  },
});
