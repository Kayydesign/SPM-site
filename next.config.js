const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'components'),
      '@styles': path.resolve(__dirname, 'styles'),
      '@public': path.resolve(__dirname, 'public'),
    };
    return config;
  },
};