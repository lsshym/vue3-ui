import Switch from "./src/switch.vue";

Switch.install = (app: any) => {
    app.component(Switch.name, Switch);
};

export default Switch;



