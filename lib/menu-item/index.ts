import MenuItem from "./src/menu-item.vue";

MenuItem.install = (app: any) => {
    app.component(MenuItem.name, MenuItem);
};

export default MenuItem;



