import {createWebHashHistory, createRouter, RouteRecordRaw} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';

const routes: RouteRecordRaw[] = [
    {path: '/', component: Home},
    {path: '/doc', component: Doc}
];
const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: routes
});