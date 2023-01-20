module.exports = {
  webpack5: true,
  images: {
    domains: [
      // 头像
      'gravatar.com',
      // 路过图床
      's1.ax1x.com', 's2.ax1x.com']
  },
  eslint: {
    dirs: [
      'components',
      'layouts',
      'lib',
      'pages'
    ]
  },
  async headers () {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()'
          }
        ]
      }
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }
    return config
  }
}
