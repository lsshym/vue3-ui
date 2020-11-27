import Menu from "./src/menu.vue";

Menu.install = (app: any) => {
    app.component(Menu.name, Menu);
};

export default Menu;



