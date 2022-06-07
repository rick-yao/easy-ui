import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options:any) => {
    const { title, content, ok, cancel } = options;
    const div = document.createElement("div");
    document.body.appendChild(div);
    const close = () => {
        // @ts-ignore
        app.unmount(div);
        div.remove();
    };
    const app = createApp({
        render() {
            return h(
                Dialog,
                {
                    visible: true,
                    "onUpdate:visible": (newVisible:boolean) => {
                        if (!newVisible) {
                            close();
                        }
                    },
                    ok, cancel
                },
                {
                    title,
                    content,
                }
            );
        },
    });
    app.mount(div);
};