import Input from "./src/input.vue";

Input.install = (app: any) => {
    app.component(Input.name, Input);
};

export default Input;
