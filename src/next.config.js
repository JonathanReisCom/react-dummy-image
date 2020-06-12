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
      return '/react-dummy-image';
    case 'development':
      return '';
    default:
      return '';
  }
};
const namespace = process.env.NAMESPACE;

console.log('USANDO ESTE NAMESPACE:', namespace, assetPrefixForNamespace(namespace));

module.exports = withPlugins([[withSass], [withImages]], {
  assetPrefix: assetPrefixForNamespace(namespace),

  webpack: (config) => {
    config.output.publicPath = `${assetPrefixForNamespace(namespace)}${config.output.publicPath}`;
    config.resolve.modules.push(path.resolve('./'));

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefixForNamespace(namespace)),
      })
    );

    return config;
  },
});
