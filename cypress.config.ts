import { defineConfig } from "cypress";
//@ts-ignore
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
       // accessing the environment variables 
       config.env.REGION = process.env.REGION
       config.env.ACCESS_KEY_ID = process.env.ACCESS_KEY_ID
       config.env.SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY

      // setup the config for test as env 
      const version = config.env.version || "test";
      config.env = require(`./config/${version}.env.json`);
      config.baseUrl = config.env.baseUrl;
      return config;
    },
  },
  viewportWidth: 1536,
  viewportHeight: 960,
  video:true
});



