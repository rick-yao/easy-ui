import { createApp } from 'vue'
import {createWebHashHistory, createRouter, RouteRecordRaw} from 'vue-router';
import './index.scss'
import App from './App.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
const routes: RouteRecordRaw[] = [
    {path:'/',component: Home},
    {path:'/doc',component:Doc}
]
const history =  createWebHashHistory()
const router = createRouter({
    history:history,
    routes:routes
})
const app = createApp(App)
app.use(router)
app.mount('#app')
