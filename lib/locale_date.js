module.exports = localeDate;

const core = require("@actions/core");

function localeDate() {
  const timeZone = process.env.TIME_ZONE || 'UTC'
  core.info(`time zone is ${JSON.stringify(process.env)}`);
  const localeString = new Date().toLocaleString("en-US", { timeZone });

  core.info(`locale string is ${localeString}`);
  return new Date(localeString)
}
