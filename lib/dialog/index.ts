import Modal from "./src/dialog.vue";

Modal.install = (app: any) => {
    app.component(Modal.name, Modal);
};

export default Modal;



