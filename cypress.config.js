const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://mayank-dev.citizensupport.app/", 
    env:
    {
      "dev": {
        email : "admin-dev@nwtoht.ca", 
        password : "password"
      }
    }
  },
});
