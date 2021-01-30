const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
  module.exports = withBundleAnalyzer({
    compress: true,
    webpack(config, { webpack, isServer }) {
      const prod = process.env.NODE_ENV === 'production';
      const newConfig = {
        ...config,
        mode: prod ? 'production' : 'development',
        plugins: [
          ...config.plugins,
          new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
        ],
      };
      if (prod) {
        newConfig.devtool = 'hidden-source-map';
      }
      newConfig.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        'fs-extra': 'empty'
      }
      return newConfig;
    },
  });