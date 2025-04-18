import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //setup the config for test as env 
      const version = config.env.version || "test";
      config.env = require(`./config/${version}.env.json`);
      config.baseUrl = config.env.baseUrl;
      return config;
    },
    viewportWidth: 1536,
    viewportHeight: 960,
  },
});
