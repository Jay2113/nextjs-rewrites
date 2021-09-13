module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: '/:slug*/',
          destination: 'https://production.d26rnk3qbcbxwm.amplifyapp.com/:slug*/',
        },
        {
          source: '/:path*',
          destination: 'https://production.d26rnk3qbcbxwm.amplifyapp.com/:path*',
        },
      ]
  },
}