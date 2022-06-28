const { override, addWebpackAlias } = require('customize-cra')

module.exports = override(config => {
    config.optimization = {
        ...config.optimization,
        minimizer: config.optimization.minimize[0],
    }

    config.resolve = {
        fallback: {
            ...config.resolve.fallback,
            stream: require.resolve('stream-browserify'),
            https: require.resolve('https-browserify'),
            http: require.resolve('stream-http'),
            crypto: require.resolve('crypto-browserify'),
            os: require.resolve('os-browserify/browser'),
            assert: require.resolve('assert'),
            Buffer: require.resolve('buffer'),
            url: false,
        },
    }
    return config
})
