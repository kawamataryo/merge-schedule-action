module.exports = localeDate;

const core = require("@actions/core");

function localeDate() {
  const timeZone = (process.env.GITHUB_ENV && process.env.GITHUB_ENV.TIME_ZONE) || 'UTC'
  const localeString = new Date().toLocaleString("en-US", { timeZone });

  core.info(`locale string is ${localeString}`);
  return new Date(localeString)
}
