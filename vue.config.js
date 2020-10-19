import { devConfig } from "./configFiles/dev.config";
import { prodConfig } from "./configFiles/prod.config";

const path = require("path");
module.exports = {
    publicPath: "/dist/", // 打包输出的文件路径
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
        // config.output = {
        //     filename: "miracle-ui.js", //打包后的 文件名称，这个文件名称与项目名称相对应
        //     library: "miracle-ui", // 指定 使用 import 或者 reqire 时的模块名，这里为 import xx from 'star-ui-vue' 或者 require('star-ui-vue')
        //     libraryTarget: "umd", // 可以指定生成不同的 umd 的代码， 可以只是 commonjs 标准的，也可以是 amd 标准的， 也可以是只能通过 script 标签引入的
        //     umdNamedDefine: true, // 会对 umd 的构建过程中的 amd 模块进行命名，  否则就使用 匿名的 define
        // };
    },
};
