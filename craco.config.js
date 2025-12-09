module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Set the target to support dynamic imports
      webpackConfig.target = ['web', 'es2020'];
      return webpackConfig;
    },
  },
  devServer: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://strapi.glennan.cloud https://www.google.com; connect-src 'self' https://localhost:3000; frame-src 'self' https://www.google.com;",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  }
};

