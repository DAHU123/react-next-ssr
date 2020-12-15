const withLess = require('@zeit/next-less')

module.exports = withLess({
    env: {
        customKey: 'my-value',
    },
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    }
})
