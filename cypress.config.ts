import { defineConfig } from "cypress";
//@ts-ignore
import { allureCypress } from "allure-cypress/reporter";
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });

      const version = config.env.version || "test";
      const fileEnv = require(`./config/${version}.env.json`);

      config.env = {
        ...config.env,
        ...fileEnv,
        REGION: process.env.REGION,
        ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
        SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
      };

      if (config.env.baseUrl) {
        config.baseUrl = config.env.baseUrl;
      }

      return config;
    },
  },
  viewportWidth: 1536,
  viewportHeight: 960,
  video: true,
  pageLoadTimeout: 10000
});
