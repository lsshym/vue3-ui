import Main from "./src/main.vue";

Main.install = (app: any) => {
    app.component(Main.name, Main);
};

export default Main;



