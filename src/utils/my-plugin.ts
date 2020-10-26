export default {
    install: (app: any) => {
        app.config.globalProperties.$whatHappend = (evt: any) => {
            console.log(evt);
        };
    },
};
