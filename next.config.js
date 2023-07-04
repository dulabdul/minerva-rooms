/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: 'my-value',
  },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
