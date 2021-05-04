const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  compress: true,
  publicRuntimeConfig: {},
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production';
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@actions': path.join(__dirname, 'src', 'actions'),
        // '@assets': path.join(__dirname, 'src', 'assets'),
        '@Template': path.join(__dirname, 'src', 'components', '@Template'),
        '@atoms': path.join(__dirname, 'src', 'components', '@atoms'),
        '@molecules': path.join(__dirname, 'src', 'components', '@molecules'),
        '@organisms': path.join(__dirname, 'src', 'components', '@organisms'),
        '@components': path.join(__dirname, 'src', 'components'),
        '@hooks': path.join(__dirname, 'src', 'hooks'),
        '@lib': path.join(__dirname, 'src', 'lib'),
        '@reducers': path.join(__dirname, 'src', 'reducers'),
        '@sagas': path.join(__dirname, 'src', 'sagas'),
        '@store': path.join(__dirname, 'src', 'store'),
        // '@Pages': path.join(__dirname, 'src', 'components', '@Pages'),
        '@actionTypes': path.join(__dirname, 'src', 'actions', 'actionTypes.js'),
        '@config': path.join(__dirname, 'config'),
      },
    };
    const newConfig = {
      ...config,
      mode: prod ? 'production' : 'development',
      plugins: [...config.plugins, new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/)],
    };
    if (prod) {
      newConfig.devtool = 'hidden-source-map';
    }
    newConfig.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      'fs-extra': 'empty',
    };
    return newConfig;
  },
});
