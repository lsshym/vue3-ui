// 路径写全
const devConfig = require("./configFiles/dev.config.ts");
const prodConfig = require("./configFiles/prod.config.ts");
const { pluginsConfig } = require("./configFiles/base.config.ts");
const path = require("path");
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "./", // 打包输出的文件路径
    outputDir: path.resolve(__dirname, "./dist"), // 打包后输出文件的所在目录
    configureWebpack: (config) => {
        // Object.assign这是什么神奇方法
        if (process.env.NODE_ENV === "production") {
            // 为生产环境修改配置...
            Object.assign(config, { ...prodConfig });
        } else {
            // 为开发环境修改配置...
            Object.assign(config, { ...devConfig });
        }
        Object.assign(config.resolve.alias, {
            "root@": "/",
        });
        const plugins = pluginsConfig();
        config.plugins = [...config.plugins, ...plugins];
    },
    chainWebpack: (config) => {
        config.plugin("copy").tap(([options]) => {
            options[0].ignore.push("examples/**/*", "docs/**/*");
            return [options];
        });
    },
};
