import Form from "./src/form.vue";

Form.install = (app: any) => {
    app.component(Form.name, Form);
};

export default Form;



