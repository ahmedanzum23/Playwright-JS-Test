// playwright.config.js (or config.js)

// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({ // <-- CORRECT: Export the result of defineConfig()
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 40 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     */
    timeout: 5000,
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. */
  use: {
    browserName: 'chromium', // This line is sometimes used instead of projects array
    headless: false 
  },
  // You don't use 'devices' in your current config, but keeping it imported is fine.
  // If you were to use projects for multiple browsers, your config would look like this:
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'], headless: false },
  //   },
  // ],
});