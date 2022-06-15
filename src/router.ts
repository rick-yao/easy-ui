import {createWebHashHistory, createRouter, RouteRecordRaw} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tabs from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
import Started from './views/Started.vue'
import Install from './views/Install.vue'
import Intro from './views/Intro.vue'

const routes: RouteRecordRaw[] = [
    {path: '/', component: Home},
    {
        path: '/doc', component: Doc, children: [
            {path:'',component:DocDemo},
            {path:'started',component:Started},
            {path:'intro',component:Intro},
            {path:'install',component:Install},
            {path: 'switch', component: Switch},
            {path: 'button', component: Button},
            {path: 'dialog', component: Dialog},
            {path: 'tabs', component: Tabs},
        ]
    }
];
const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: routes
});