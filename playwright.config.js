// Minimal Playwright config for local runs and GitHub Actions.
module.exports = {
  testDir: "./tests/e2e",
  timeout: 60000,
  use: {
    baseURL: process.env.TIMEKEEPER_URL || "https://donqwsdc.github.io/TimeKeeper/",
    viewport: { width: 390, height: 844 },
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "mobile-375",
      use: { viewport: { width: 375, height: 812 } },
    },
    {
      name: "tablet-768",
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: "desktop",
      use: { viewport: { width: 1366, height: 900 } },
    },
  ],
};
