const CompressionWebpackPlugin = require("compression-webpack-plugin");
const zopfli = require("@gfx/zopfli");
const BrotliPlugin = require("brotli-webpack-plugin");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

const pluginsConfig = () => {
    const plugins = [];
    if (IS_PROD) {
        plugins.push(
            new CompressionWebpackPlugin({
                algorithm(input, compressionOptions, callback) {
                    return zopfli.gzip(input, compressionOptions, callback);
                },
                compressionOptions: {
                    numiterations: 15,
                },
                minRatio: 0.99,
                test: productionGzipExtensions,
            })
        );
        plugins.push(
            new BrotliPlugin({
                test: productionGzipExtensions,
                minRatio: 0.99,
            })
        );
    }
    return plugins;
};

module.exports = {
    pluginsConfig
}
