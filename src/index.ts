import Button from "../lib/button/index";
import Input from "../lib/input/index";
import Radio from "../lib/radio/index";

const components = [Button, Input, Radio];

/* Vue3的安装方法有点奇特，传入的不再是Vue2的Vue实例
，而是createApp创建出来的 */
/* 又有一个install，这个应该是全局
import xxx from 'xxx'
app.use(xxx)
*/
const install = (app: any) => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};

export { install, Button, Input, Radio };
export default {
    install,
};
