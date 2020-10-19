import Button from "./src/button.vue";

/* 这个方法应该是单独导入时用到的
import {Button} from 'xxx'
app.use(Button)
*/
Button.install = (app: any) => {
    app.component(Button.name, Button);
};

export default Button;
