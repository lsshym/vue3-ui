import Button from "../packages/button/index";

const Components = [Button];

const install = (Vue: any) => {
    const { createApp } = Vue;
    const app = createApp({});

    Components.forEach((component) => {
        app.component(component.name, component);
    });
};

export default {
    version: "0.0.1",
    install,
    Button,
};
