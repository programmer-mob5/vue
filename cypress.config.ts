import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    CY_APP_EXAMPLE_API: 'https://example.dummy-api.com',
  },
  e2e: {
    baseUrl: 'http://localhost:9090',
    specPattern: 'cypress/e2e/**/*.cy.spec.ts',
    supportFile: 'cypress/support/e2e.ts',
    screenshotsFolder: 'cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      coverage(on, config);

      return config;
    },
  },
  component: {
    specPattern: 'src/**/*.cy.spec.ts',
    supportFolder: 'cypress/support/component.ts',
    setupNodeEvents(on, config) {
      coverage(on, config);

      return config;
    },
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
});
