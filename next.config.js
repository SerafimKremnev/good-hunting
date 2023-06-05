// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const moduleExports = {

  trailingSlash: true,
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },

  webpack(config, options) {
    config.module.rules.push({
      // loader: '@svgr/webpack',
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false
                }
              ]
            }
          }
        },
      ],
      issuer: /\.[jt]sx?$/,
      // options: {
      // prettier: false,
      // svgo: true,
      // svgoConfig: {
      //   plugins: [{ removeViewBox: false }],
      // },
      // titleProp: true,
      // },
      test: /\.svg$/,
    });

    return config;
  },
}

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
}

module.exports = moduleExports
