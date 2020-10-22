import { createApp } from "vue";
// 反正是测试用的，直接全局导入算了
import niubi from "./index";
import App from "../examples/demo.vue";
const app = createApp(App);
app.use(niubi);
app.mount("#app");
