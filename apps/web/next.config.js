const withTM = require('next-transpile-modules')(['@stellar-cultures/ui']);

module.exports = withTM({
  reactStrictMode: true,
});
