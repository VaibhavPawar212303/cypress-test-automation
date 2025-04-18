import { defineConfig } from "cypress";
import writeAllureResults from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      writeAllureResults(on, config);
      //setup the config for test as env 
      const version = config.env.version || "test";
      config.env = require(`./config/${version}.env.json`);
      config.baseUrl = config.env.baseUrl;
      return config;
    },
    reporter: 'cypress-allure-plugin',
    reporterOptions: {
      outputDir: 'allure-results',
      clean: true,
    },
    viewportWidth: 1536,
    viewportHeight: 960,
  },
});
