const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config = ({
  testDir: './tests',
  timeout : 40 * 1000,
  expect : {
    timeout : 5000
  },
  use : {
    browserName : 'chromium',
    headless: false
  },
  reporter : 'html'

});

module.exports = config