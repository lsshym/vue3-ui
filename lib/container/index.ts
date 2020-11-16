import Container from "./src/container.vue";

Container.install = (app: any) => {
    app.component(Container.name, Container);
};

export default Container;



