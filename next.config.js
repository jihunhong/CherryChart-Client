const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  compress: true,
  images: {
    domains: ['cdn.cherrychart.com'],
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
    removeConsole: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production';
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@actions': path.join(__dirname, 'src', 'actions'),
        '@Layout': path.join(__dirname, 'src', 'components', '@Layout'),
        '@Template': path.join(__dirname, 'src', 'components', '@Template'),
        '@atoms': path.join(__dirname, 'src', 'components', '@atoms'),
        '@molecules': path.join(__dirname, 'src', 'components', '@molecules'),
        '@organisms': path.join(__dirname, 'src', 'components', '@organisms'),
        '@components': path.join(__dirname, 'src', 'components'),
        '@hooks': path.join(__dirname, 'src', 'hooks'),
        '@lib': path.join(__dirname, 'src', 'lib'),
        '@reducers': path.join(__dirname, 'src', 'reducers'),
        '@store': path.join(__dirname, 'src', 'store'),
        '@config': path.join(__dirname, 'config'),
      },
    };
    const newConfig = {
      ...config,
      mode: prod ? 'production' : 'development',
      plugins: [...config.plugins],
    };
    if (prod) {
      newConfig.devtool = 'hidden-source-map';
    }

    return newConfig;
  },
});
