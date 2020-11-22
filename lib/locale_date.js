module.exports = localeDate;

const core = require("@actions/core");

function localeDate() {
  core.info(`github env is ${JSON.stringify(process.env)}`);
  const timeZone = process.env.TIME_ZONE || 'UTC'
  const localeString = new Date().toLocaleString("en-US", { timeZone });

  core.info(`locale string is ${localeString}`);
  return new Date(localeString)
}
