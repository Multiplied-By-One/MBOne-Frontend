const path = require('path')

module.exports = async ({config}) => {
    // Add custom rule for loading fonts
    config.module.rules.push({
        test: /\.(woff|woff2|ttf)/,
        use: [
            {
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                }
            }
        ]
    })

    return config
}