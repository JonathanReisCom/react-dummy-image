const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
// const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const path = require('path');

const assetPrefixForNamespace = (namespace) => {
  switch (namespace) {
    case 'prod':
      return '/react-dummy-image';
    case 'export_mac':
      return '/my-menu/out';
    case 'development':
      return '';
    default:
      return '';
  }
};
const namespace = process.env.NAMESPACE;

module.exports = withPlugins([[withSass], [withImages]], {
  // assetPrefix: '/my-menu/out', // affects page bundles and app/commons/vendor scripts
  assetPrefix: assetPrefixForNamespace(namespace),
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  webpack: (config) => {
    // config.output.publicPath = `/my-menu/out${config.output.publicPath}`; // affects 'chunks'
    config.output.publicPath = `${assetPrefixForNamespace(namespace)}${config.output.publicPath}`;
    config.resolve.modules.push(path.resolve('./'));

    // config.plugins.push(
    //   new webpack.DefinePlugin({
    //     'process.env.ASSET_PREFIX': JSON.stringify(assetPrefixForNamespace(namespace)),
    //   })
    // );

    return config;
  },
});
