module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Set the target to support dynamic imports
      webpackConfig.target = ['web', 'es2020'];
      return webpackConfig;
    },
  },
};

