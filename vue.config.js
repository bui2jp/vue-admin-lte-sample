const webpack = require('webpack');
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/),
            new webpack.ProvidePlugin({ moment: "moment" }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
              }),
        ]
    },
    devServer: {
        port: 8081,
        disableHostCheck: true,
    },
};