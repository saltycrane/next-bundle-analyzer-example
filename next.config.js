const bundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  [
    bundleAnalyzer,
    {
      enabled: process.env.ANALYZE === "true",
    },
  ],
]);
