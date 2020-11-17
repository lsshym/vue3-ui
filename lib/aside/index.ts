import Aside from "./src/aside.vue";

Aside.install = (app: any) => {
    app.component(Aside.name, Aside);
};

export default Aside;



