import Radio from "./src/radio.vue";

Radio.install = (app: any) => {
    app.component(Radio.name, Radio);
};

export default Radio;



