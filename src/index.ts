import { createApp } from "vue";

import Button from "../packages/button/index";

const Components = [Button];

// const install = (Vue: any, opts = {}) => {
//     const { createApp } = Vue;
//     const app = createApp(opts);

//     Components.forEach((component) => {
//         app.component(component.name, component);
//     });
// };
const app = createApp({});

Components.forEach((component) => {
    app.component(component.name, component);
});

export default Components;
